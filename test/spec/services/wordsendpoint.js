'use strict';

describe('Service: wordsendpoint', function () {

  // load the service's module
  beforeEach(module('sightWordsApp'));

  // instantiate service
  var wordsendpoint;
  beforeEach(inject(function (_wordsendpoint_) {
    wordsendpoint = _wordsendpoint_;
  }));

  it('should do something', function () {
    expect(!!wordsendpoint).toBe(true);
  });

});
