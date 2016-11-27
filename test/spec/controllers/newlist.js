'use strict';

describe('Controller: NewlistCtrl', function () {

  // load the controller's module
  beforeEach(module('sightWordsApp'));

  var NewlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewlistCtrl = $controller('NewlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewlistCtrl.awesomeThings.length).toBe(3);
  });
});
