'use strict';

angular.module('masterGamerTriviaFrontApp')
  .service('WorldOfWarcraftQuestionService', function ($resource, $http, Config, apiEndpoint) {
  	var baseUrl = Config.worldOfWarcrafrtQuestion;
	return $resource(
		baseUrl, 
		{}, 
		{
    		get: { method: 'GET', isArray: false, url: baseUrl + '/:id' },
    		deleteQuestion: { method: 'DELETE', isArray: false, url: baseUrl + '/:id' },
      		update: { method: 'PUT', isArray: false, url: baseUrl + '/:id' },
    		findAll: { method: 'GET', isArray: true, url: baseUrl + '/all' },
			getQuantity: { method: 'GET', isArray: false, url: baseUrl + '/quantity' },
      		insert: { method: 'POST', isArray: false }
      		
		}
	);
});