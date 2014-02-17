angular.module('RantxoApp', [
  'RantxoApp.controllers',
  'RantxoApp.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/players", {templateUrl: "partials/players.html", controller: "PlayersController"}).
	when("/games", {templateUrl: "partials/games.html", controller: "GamesController"}).
	otherwise({redirectTo: '/players'});
}]);