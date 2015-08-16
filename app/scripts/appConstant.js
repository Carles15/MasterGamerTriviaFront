'use strict';
angular.module('masterGamerTriviaFrontApp')
.factory('Config', function (apiEndpoint) {
	return {
		gamesInfo: apiEndpoint + 'game',
		worldOfWarcrafrtQuestion: apiEndpoint + 'question/worldofwarcraft'
	};
});