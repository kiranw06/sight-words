'use strict';

/**
 * @ngdoc function
 * @name sightWordsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the sightWordsApp
 */

angular.module('sightWordsApp')
  .controller('ProjectsCtrl', function($scope, $localStorage){ 

    $scope.storage = $localStorage;
    $scope.savedLists = $scope.storage.savedLists;

    // Check if saved lists exists
   	if ($scope.savedLists) {
   	  console.log('loaded saved word lists');
   	}
   	else {
   	  $localStorage.savedLists = {};
   	  $scope.savedLists = $localStorage.savedLists;
   	  console.log('initalized saved word lists');
   	}

});

