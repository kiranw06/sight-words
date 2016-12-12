'use strict';

/**
 * @ngdoc function
 * @name sightWordsApp.controller:PrintCtrl
 * @description
 * # PrintCtrl
 * Controller of the sightWordsApp
 */
angular.module('sightWordsApp')
  .controller('PrintCtrl', function ($scope, $localStorage, $routeParams) {
   	

// 	Defines controller params as a $scope
   	$scope.storage = $localStorage;
   	$scope.slug = $routeParams.slug;
   	console.log($scope.slug);
   
   	
//  Grabs list data by slug with $routeParams	
   	$scope.savedLists = $scope.storage.savedLists;
   	console.log($scope.savedLists);
   	$scope.currentList = $scope.savedLists[$scope.slug];
   	console.log($scope.currentList);
	//	Adds $scope to words in currentList 
	$scope.currentWords = $scope.currentList.words;




   	// Check if saved lists exists
   	if ($scope.savedLists) {
   	  console.log('loaded saved word lists');
   	}
   	else {
   	  $localStorage.savedLists = {};
   	  $scope.savedLists = $localStorage.savedLists;
   	  console.log('initalized saved word lists');
   	}

      $scope.printDiv = function() {
        var printContents = document.getElementById("printable").innerHTML;
        var popupWin = window.open('Print Me', '_blank');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="../styles/main.css"></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
      }; 

  });
