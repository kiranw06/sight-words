'use strict';

describe('Service: auth.service.js', function () {

  // load the service's module
  beforeEach(module('sightWordsApp'));

  // instantiate service
  var auth.service.js;
  beforeEach(inject(function (_auth.service.js_) {
    auth.service.js = _auth.service.js_;
  }));

  it('should do something', function () {
    expect(!!auth.service.js).toBe(true);
  });

});
