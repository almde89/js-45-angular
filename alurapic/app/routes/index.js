var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
  /**
  Definindo os recursos RESTful que são acessados.
  */
    app.route('/v1/fotos')// definição de recurso de coleção de recursos
        .post(api.adiciona)
        .get(api.lista);

    app.route('/v1/fotos/:fotoId') // definição do recurso de um item específico da coleção
        .delete(api.remove) // definição dos verbos
        .get(api.busca)
        .put(api.atualiza);

    app.get('/v1/grupos', api.listaGrupos)
    app.get('/v1/fotos/grupo/:grupoId', api.listaPorGrupo);


    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};
