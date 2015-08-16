'use strict';

describe('Controller: TriviaCtrl', function () {

  // load the controller's module
  beforeEach(module('masterGamerTriviaFrontApp'));

  var TriviaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TriviaCtrl = $controller('TriviaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
