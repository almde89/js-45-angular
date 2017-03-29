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
  }]);
})()
