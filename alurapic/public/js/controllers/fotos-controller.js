(function (dom) {
  var app = angular.module('alurapic');// consulta ao módulo já criado.
  app.controller('FotosController', ['$scope', 'recursoFoto',
    function ($scope, recurso) {
      $scope.filtro = '';
      recurso.query(function (fotos) {
        $scope.fotos = fotos;
      }, function (error) {
        console.error("$http.get('v1/fotos'): " + error.msg);
      });
      $scope.remover = function ($index) {
        var foto = $scope.fotos[$index];
        recurso.delete({fotoId: foto._id}, function () {
            $scope.fotos.splice($index, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso.';
          }, function (error) {
            console.log(error);
            $scope.mensagem = 'Não foi possível apagar a foto' + foto.titulo;
          });
      };
    }
  ]);
})(document)
