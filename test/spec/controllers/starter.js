'use strict';

describe('Controller: StarterCtrl', function () {

  // load the controller's module
  beforeEach(module('sightWordsApp'));

  var StarterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StarterCtrl = $controller('StarterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StarterCtrl.awesomeThings.length).toBe(3);
  });
});
