'use strict';

/**
 * @ngdoc function
 * @name sightWordsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the sightWordsApp
 */
angular.module('sightWordsApp')
  .controller('ProjectsCtrl', function ($scope, search) {
    $scope.refreshsearch = function(term){
    	$scope.suggestedWords = search.query({
    		s: term 
    	});
    };
  });
