'use strict';

angular.module('masterGamerTriviaFrontApp')
  .controller('MainCtrl', function ($scope, $resource, GameInfoService) {

    $scope.juegos = GameInfoService.findAll();

    $scope.goTrivia = function(gameSelected) {
      alert("Ir a " + gameSelected);
    }

  	//$scope.mostrar = GameInfoService.get({id:"1"});

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
