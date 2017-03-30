(function () {
  var app = angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', ['$resource', function ($resource) {
      var recursoFoto = $resource('v1/fotos/:fotoId', null, {update: {method: 'PUT'}});
      return recursoFoto;
    }]);// criação do módulo
})()
