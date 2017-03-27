(function () {
  var app = angular.module('alurapic');// consulta ao módulo já criado.
  app.controller('FotosController', ['$scope', '$http',
    function ($scope, $http) {
      $http.get('v1/fotos').then(function (response) {
        $scope.fotos = response.data;
      }).catch(function (error) {
        console.error("$http.get('v1/fotos'): " + error.msg);
      });
      /*$scope.foto = {
        titulo: 'Leão',
        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
      };*/
    }
  ]);
})()
