(function (dom) {
  var app = angular.module('alurapic');// consulta ao módulo já criado.
  app.controller('FotosController', ['$scope', 'fotoDAO',
    function ($scope, dao) {
      $scope.filtro = '';
      dao.listar().then( function (fotos) {
        $scope.fotos = fotos;
      }).catch(function (error) {
        console.error("$http.get('v1/fotos'): " + error.msg);
      });
      $scope.remover = function ($index) {
        var foto = $scope.fotos[$index];
        dao.remover(foto._id).then(function () {
          $scope.fotos.splice($index, 1);
          $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso.';
        }).catch(function (error) {
          console.log(error);
          $scope.mensagem = 'Não foi possível apagar a foto' + foto.titulo;
        });
      };
    }
  ]);
})(document)
