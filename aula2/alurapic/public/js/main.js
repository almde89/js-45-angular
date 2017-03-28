(function (doc) {
  var app = angular.module('alurapic',
    ['diretivasBootstrap', 'ngAnimate', 'ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($route, $location) {
      $location.html5Mode(true);

      $route.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController as ctrl'
      });
      $route.when('/fotos/new', {
        templateUrl: 'partials/foto.html'
      })
      $route.otherwise({redirectTo: '/fotos'});
    }]);// criação do módulo
})(document)
