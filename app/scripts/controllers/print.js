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
        // added styles for print stylesheet as style element
        popupWin.document.write('<html><body onload="window.print()"><style>@page{size:A4;}ul{list-style-type:none;}div.printable{width:100%;height:100%;}div.printable-card{width:5in;height:3in;margin:10px;border-radius:30px;border-style:dashed;border-width:thick;background-color:rgb(255, 232, 164);page-break-inside:avoid;}div.card-word{font-size:xx-large;font-family:sans-serif;text-align:center;margin-top:16%;margin-bottom:20%;}</style>' + printContents + '</body></html>');
        popupWin.document.close();
      }; 

  });
