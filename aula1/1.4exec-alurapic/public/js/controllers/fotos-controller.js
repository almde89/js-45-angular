(function () {
  var app = angular.module('alurapic');
  app.controller('FotosController', ['$scope', function ($scope) {
    $scope.foto = {
      titulo: 'Leão',
      url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };
  }]);
})()
