(function (dom) {
  var app = angular.module('alurapic');// consulta ao módulo já criado.
  app.controller('FotoController', ['$scope', 'recursoFoto', '$routeParams',
    function ($scope, recurso, $params) {

      if ($params.fotoId) {
        recurso.get({fotoId: $params.fotoId}, function (foto) {
            $scope.foto = foto;
          }, function (error) {
          $scope.mensagem = 'Não foi possível recuperar a imagem'
        });
      } else {
        $scope.foto = {};
      }

      $scope.submeter = function () {
        if ($scope.formulario.$valid) {
          if (!$params.fotoId) {
            recruso.save({fotoId: $scope.foto}, function () {
              $scope.mensagem = 'Foto cadastrada com sucesso';
              $scope.foto = {};
              $scope.formulario.$setPristine();
              $scope.formulario.$setUntouched();
            }, function (error) {
              $scope.mensagem = 'Não foi possível cadastrar a foto';
            });
          } else {
            recurso.update({fotoId: $params.fotoId}, $scope.foto, function () {
              $scope.mensagem = 'Foto alterada com sucesso';
              $scope.formulario.$setPristine();
              $scope.formulario.$setUntouched();
            }, function (error) {
              $scope.mensagem = 'Não foi possível alterar a foto';
            });
          }
        }
      };
    }
  ]);
})(document)
