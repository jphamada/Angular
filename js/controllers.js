angular.module('RantxoApp.controllers', []).

  controller('PlayersController', function($scope, myService) {
    $('#0').addClass("active");
    $('#1').removeClass("active");
    $scope.show = false;
    $scope.orderAscDesc = true;

    $scope.players = [];
    myService.getPlayers().success(function (response) {
        $scope.players = response;
        angular.forEach(response, function (detail) {
          detail.coeficiente = parseFloat(detail.coeficiente);
          detail.goles = parseFloat(detail.goles);
          detail.victorias = parseFloat(detail.victorias);
          detail.empates = parseFloat(detail.empates);
          detail.derrotas = parseFloat(detail.derrotas);
          detail.gf = parseFloat(detail.gf);
          detail.gc = parseFloat(detail.gc);
          detail.golaverage = parseFloat(detail.golaverage);
        });
    });
  }).

  controller('GamesController', function($scope, myService) {
    $('#0').removeClass("active");
    $('#1').addClass("active");
    
    $scope.games = [];
    myService.getGames().success(function (response) {
        $scope.games = response;
    });
  });