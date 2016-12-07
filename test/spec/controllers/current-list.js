'use strict';

describe('Controller: CurrentListCtrl', function () {

  // load the controller's module
  beforeEach(module('sightWordsApp'));

  var CurrentListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrentListCtrl = $controller('CurrentListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CurrentListCtrl.awesomeThings.length).toBe(3);
  });
});
