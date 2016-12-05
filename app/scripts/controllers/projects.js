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

});

