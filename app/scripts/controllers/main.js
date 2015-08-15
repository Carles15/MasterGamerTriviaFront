'use strict';

angular.module('masterGamerTriviaFrontApp')
  .controller('MainCtrl', function ($scope, $resource, WorldOfWarcraftQuestionService) {

  	$scope.mostrar = WorldOfWarcraftQuestionService.get({id:"1"});
    $scope.hola="Hola Mundo";
    console.log($scope.hola);

  	/*var getWowQuestionFromService = function(itemTypes){

		ItemService.find(prepareFilterQuery(itemTypes)).$promise.then(
			function (items) {
				$scope.itemList = items;
				
			}
			);
	};

	$scope.getWowQuestionFromService = function() {
    	WorldOfWarcraftQuestion.get({postTitle: $scope.taskId}, {title: title, postDescription:description}, function(data) {
    		$scope.posts.push(data);$scope.changeCommenting(false);
    	});

    };

    Tasks.getPosts({taskId:$scope.taskId});*/
    
  });
