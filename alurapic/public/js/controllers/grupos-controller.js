(function (dom) {
  var app = angular.module('alurapic');// consulta ao módulo já criado.
  app.controller('GruposController', ['$scope', '$http',
    function ($scope, $http) {
      $http.get('v1/grupos').success(function (grupos) {
        $scope.grupos = grupos;
      }).error(function () {
        $scope.mensagem = 'Não foi possível recuperar os grupos.';
      });
    }
  ]);
})(document)
