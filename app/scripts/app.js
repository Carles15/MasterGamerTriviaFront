'use strict';

/**
 * @ngdoc overview
 * @name masterGamerTriviaFrontApp
 * @description
 * # masterGamerTriviaFrontApp
 *
 * Main module of the application.
 */
angular
  .module('masterGamerTriviaFrontApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/trivia', {
        templateUrl: 'views/trivia.html',
        controller: 'TriviaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
