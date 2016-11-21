'use strict';

/**
 * @ngdoc service
 * @name sightWordsApp.search
 * @description
 * # search
 * Factory in the sightWordsApp.
 */
angular.module('sightWordsApp')
  .factory('search', function ($resource) {
   return $resource('https://api.datamuse.com/sug?s=:s&max=:max', {}, {
      query: {
        method:'GET',
        params:{
          s: '',
          max: '12'
        },
          isArray:true
      }
    });
  });
