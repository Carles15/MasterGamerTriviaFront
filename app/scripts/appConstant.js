'use strict';
angular.module('masterGamerTriviaFrontApp')
.factory('Config', function (apiEndpoint) {
	return {
		worldOfWarcrafrtQuestion: apiEndpoint + 'question/worldofwarcraft'
	};
});