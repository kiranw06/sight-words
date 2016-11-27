'use strict';

describe('Controller: SearchviewCtrl', function () {

  // load the controller's module
  beforeEach(module('sightWordsApp'));

  var SearchviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchviewCtrl = $controller('SearchviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchviewCtrl.awesomeThings.length).toBe(3);
  });
});
