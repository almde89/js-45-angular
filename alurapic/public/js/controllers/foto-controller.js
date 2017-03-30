(function (dom) {
  var app = angular.module('alurapic');// consulta ao módulo já criado.
  app.controller('FotoController', ['$scope', '$http',
    function ($scope, $http) {
      $scope.foto = {}
      $scope.submeter = function () {
        if ($scope.formulario.$valid) {
          $http.post('v1/fotos', $scope.foto).success(function () {
            $scope.mensagem = 'Foto cadastrada com sucesso';
            $scope.foto = {};
            $scope.formulario.$setPristine();
            $scope.formulario.$setUntouched();
          }).error(function (error) {
            $scope.mensagem = 'Não foi possível cadastrar a foto';
          });
        }
      };
    }
  ]);
})(document)
