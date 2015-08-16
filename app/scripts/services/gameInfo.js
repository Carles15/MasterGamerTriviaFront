'use strict';

angular.module('masterGamerTriviaFrontApp')
  .service('GameInfoService', function ($resource, $http, Config, apiEndpoint) {
  	var baseUrl = Config.gamesInfo;
	return $resource(
		baseUrl, 
		{}, 
		{
    		get: { method: 'GET', isArray: false, url: baseUrl + '/:id' },
    		deleteGame: { method: 'DELETE', isArray: false, url: baseUrl + '/:id' },
    		update: { method: 'PUT', isArray: false, url: baseUrl + '/:id' },
    		findAll: { method: 'GET', isArray: true, url: baseUrl + '/all' },
    		insert: { method: 'POST', isArray: false }
      		
		}
	);
});