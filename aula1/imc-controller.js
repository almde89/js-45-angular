(function (document) {
  var app = angular.module('imcApp', []);
  app.controller('ImcController', ['$scope', function ($scope) {
    $scope.calculaimc = function () {
      $scope.imc = $scope.peso/($scope.altura * $scope.altura);
      if ($scope.imc < 18.5) {
        $scope.situacao = "Abaixo do peso!";
      } else if ($scope.imc >= 18.5 && $scope.imc < 36) {
        $scope.situacao = "Peso normal.";
      } else {
        $scope.situacao = "Sobrepeso!";
      }
    }
  }]);
})(document)
