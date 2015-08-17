'use strict';

angular.module('masterGamerTriviaFrontApp')
  .controller('TriviaCtrl', function ($scope, $resource, $location, WorldOfWarcraftQuestionService) {
  	$scope.start= false;
    $scope.pregunta = WorldOfWarcraftQuestionService.get({id:"2"});
    $scope.questionsQuantity = WorldOfWarcraftQuestionService.getQuantity();
    console.log($scope.questionsQuantity);

    $scope.goIn = function() {
    	$scope.start= true;
    }

    $scope.goBack = function() {
    	$location.url("/");
    }

  });
