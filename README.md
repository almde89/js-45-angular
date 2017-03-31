# js-45-angular
Angular 1 Caelum

## Primeira Aula

- Exercício IMC

### Ferramentas utilizadas
Fullstack JS:

- NeDB: Node Embedded Database (apenas para testes). **Indicação Uso**: MongoDB
- NodeJS com Express para a criação dos endpoints.
- AngularJS framework MVC.

### Alurapic
**servidor**: script /server.js
**config**: configuração do Node Server.
**database.js**: configura o NeDB.
**express.js**: configura o Express.
**app**: App servidora.
**api**: endpoints do backend.
**routes**: configuração para o Express + Node.
**public**: aplicação cliente (browser).

**Exercícios**: 1.3; 1.13.

**Nota**: Dá uma olhadinha na página 15 da apostila, sobre SRC do IMG (1.14 NG-SRC).

**Obs.**: Promisses: https://github.com/kriskowal/q & https://docs.angularjs.org/api/ng/service/$q

# Aula 4

## ngResource

Maneira de operar com os verbos do HTTP e adicionar um método update para utilizar
o verbo PUT na hora de atualizar, pois o save utiliza sempre o verbo POST.
```javascript
var recursoFoto = $resource('v1/fotos/:fotoId', null, {update: {method: 'PUT'}});
/*Para coleções: query*/
recursoFoto.query(function (dados) {

}, function (erro) {

});
/*Para itens de coleção*/
recursoFoto.get({fotoId: '12ab'}, function (dados) {

}, function (erro) {

});
recursoFoto.save($scope.foto, fnSucesso, fnErro);
recursoFoto.delete({fotoId: '12ab'}, fn, fn);
/* conforme definido em 5 linha. */
recursoFoto.update({fotoId: '12ab'}, $scope.foto, fn, fn);
```

# Aula 5
**Vide:** http://blog.alura.com.br/construtores-em-javascript/.
