(function () {
  angular.module('diretivasBootstrap', [])
  .directive('meuPainel', [function () { // diretiva não utiliza hifem.
    var ddo = {}; // Derective Definition Object
    ddo.restric = "E";
    ddo.templateUrl = "js/directives/meu-painel.html";
    ddo.scope = {
      titulo: "@"
    };
    ddo.transclude = true;
    return ddo;
  }])
  .directive('minhaFoto', [function () {
    return {
      restric: "E",
      templateUrl: "js/directives/minha-foto.html",
      scope: {
        titulo: "@",
        urlImagem: "@url"
      }
    };
  }])
  .directive('botaoPerigoso', [function () {
    var ddo = {};
    ddo.restric = "E";
    ddo.scope = {
      nome: '@', // passa sempre uma string. essa string será avaliada (val()) no scope restrito.
      acao: '&' // vincula o valor passado ao scope parente. A expressão será avaliada no scope da controller.
    };
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>'

    return ddo;
  }]);
})()
