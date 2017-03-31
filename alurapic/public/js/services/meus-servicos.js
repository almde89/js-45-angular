(function () {
  angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', ['$resource', function ($resource) {
      return $resource('v1/fotos/:fotoId', null, {update: {method: 'PUT'}});
    }])
    .service('fotoDAO', ['recursoFoto', '$q', function (recurso, $q) {

      this.remover = function (fotoId) {
        var deffered = $q.defer();

        recurso.delete({fotoId: fotoId}, function () {
          deffered.resolve();
        }, function (error) {
          deffered.reject();
        });

        return deffered.promise;
      };

      this.obter = function (fotoId) {
        var deffered = $q.defer();

        recurso.get({fotoId: fotoId}, function (foto) {
            deffered.resolve(foto);
          }, function (error) {
          deffered.reject(error);
        });

        return deffered.promise;
      };

      this.listar = function () {
        var deffered = $q.defer();

        recurso.query(function (fotos) {
          deffered.resolve(fotos);
        }, function (error) {
          deffered.reject(error);
        });

        return deffered.promise;
      };

      this.salvar = function (foto) {
        var deffered = $q.defer();
        if (!foto._id) {
          incluir(foto, deffered);
        } else {
          atualizar(foto, deffered);
        }
        return deffered.promise;
      };

      function incluir(foto, deffered) {
        recurso.save({fotoId: foto._id}, foto, function () {
          deffered.resolve({
            mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
            inclusao: true
          });
        }, function (error) {
          console.log(error);
          deffered.reject({mensagem: 'Não foi possível incluir a foto ' + foto_titulo});
        });
      }

      function atualizar (foto, deffered) {
        recurso.update({fotoId: foto._id}, foto, function () {
          deffered.resolve({
            mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
            inclusao: false
          });
        }, function (error) {
          console.log(error);
          deffered.reject({mensagem: 'Não foi possível atualizar a foto ' + foto_titulo});
        });
      }
    }]);// criação do módulo
})()
