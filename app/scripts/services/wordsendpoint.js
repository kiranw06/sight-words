'use strict';

/**
 * @ngdoc service
 * @name sightWordsApp.wordsendpoint
 * @description
 * # wordsendpoint
 * Factory in the sightWordsApp.
 */
angular.module('sightWordsApp')
  .factory('wordsendpoint', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
