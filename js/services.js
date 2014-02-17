angular.module('RantxoApp.services', [])
  .factory('myService', function($http) {

    var rantxoAPI = {};

    rantxoAPI.getPlayers = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost/app/allPlayersToJson.php' 
      });
    }

    rantxoAPI.getGames = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost/app/allGamesToJson.php'  
      });
    }

    return rantxoAPI;
  });