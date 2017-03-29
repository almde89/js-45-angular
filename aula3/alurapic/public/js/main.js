(function (doc) {
  var app = angular.module('alurapic',
    ['diretivasBootstrap', 'ngAnimate', 'ngRoute', 'ngMessages'])
    .config(['$routeProvider', '$locationProvider', function ($route, $location) {
      $location.html5Mode(true);

      $route.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController as ctrl'
      });
      $route.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController as ctrl'
      })
      $route.otherwise({redirectTo: '/fotos'});
    }]);// criação do módulo
})(document)
