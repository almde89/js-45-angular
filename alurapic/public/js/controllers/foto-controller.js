(function (dom) {
  var app = angular.module('alurapic');// consulta ao módulo já criado.
  app.controller('FotoController', ['$scope', 'fotoDAO', '$routeParams', 'eventoFocar',
    function ($scope, fotoDAO, $params, focar) {

      if ($params.fotoId) {
        fotoDAO.obter($params.fotoId).then(function (foto) {
          $scope.foto = foto;
        }).catch(function (error) {
          $scope.mensagem = 'Não foi possível recuperar a imagem'
        });
      } else {
        $scope.foto = {};
      }

      $scope.submeter = function () {
        if ($scope.formulario.$valid) {
          fotoDAO.salvar($scope.foto).then(function (resposta) {
            $scope.mensagem = resposta.mensagem;
            $scope.$broadcast(focar);
            if (resposta.inclusao) $scope.foto = {};
            $scope.formulario.$setPristine();
            $scope.formulario.$setUntouched();
          }).catch(function (error) {
            $scope.mensagem = $error.mensagem;
          });
        }
      };
    }
  ]);
})(document)
