(function (dom) {
  var app = angular.module('alurapic');// consulta ao módulo já criado.
  app.controller('FotosController', ['$scope', '$http',
    function ($scope, $http) {
      $scope.filtro = '';
      $http.get('v1/fotos').then(function (response) {
        $scope.fotos = response.data;
      }).catch(function (error) {
        console.error("$http.get('v1/fotos'): " + error.msg);
      });
      $scope.remover = function ($index) {
        var foto = $scope.fotos[$index];
        $http.delete('v1/fotos/' + foto._id)
          .success(function () {
            $scope.fotos.splice($index, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso.';
          })
          .error(function (error) {
            console.log(error);
            $scope.mensagem = 'Não foi possível apagar a foto' + foto.titulo;
          });
      };
    }
  ]);
})(document)
