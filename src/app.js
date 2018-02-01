var app = angular.module('app', ['service']);
app.controller('AppCtrl', function($scope, AppService) {
  $scope.nome = 'Erick';
  $scope.items = [];
  $scope.ativo = false;
  $scope.atividade = {};

  AppService.listar().then(function(resultado) {
    $scope.items = resultado.results;
  });
  $scope.clickDetalhes = clickDetalhes;
  function clickDetalhes(nome) {
    $scope.ativo = true;
    AppService.detalhes(nome).then(function(resultado) {
      $scope.atividade = resultado;
      console.log('$scope.atividade', $scope.atividade);
    });
  }
});
