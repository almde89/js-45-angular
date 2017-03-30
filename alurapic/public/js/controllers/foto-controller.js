(function (dom) {
  var app = angular.module('alurapic');// consulta ao módulo já criado.
  app.controller('FotoController', ['$scope', '$http', '$routeParams', '$resource',
    function ($scope, $http, $params, $resource) {
      if ($params.fotoId) {
        $http.get('v1/fotos/' + $params.fotoId).success(
          function (foto) {
            $scope.foto = foto;
          }
        ).error(function (error) {
          $scope.mensagem = 'Não foi possível recuperar a imagem'
        });
      } else {
        $scope.foto = {};
      }

      $scope.submeter = function () {
        if ($scope.formulario.$valid) {
          if (!$params.fotoId) {
            $http.post('v1/fotos', $scope.foto).success(function () {
              $scope.mensagem = 'Foto cadastrada com sucesso';
              $scope.foto = {};
              $scope.formulario.$setPristine();
              $scope.formulario.$setUntouched();
            }).error(function (error) {
              $scope.mensagem = 'Não foi possível cadastrar a foto';
            });
          } else {
            $http.put('v1/fotos/' + $params.fotoId, $scope.foto).success(function () {
              $scope.mensagem = 'Foto alterada com sucesso';
              $scope.formulario.$setPristine();
              $scope.formulario.$setUntouched();
            }).error(function (error) {
              $scope.mensagem = 'Não foi possível alterar a foto';
            });
          }
        }
      };
    }
  ]);
})(document)
