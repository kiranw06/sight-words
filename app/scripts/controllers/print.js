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
   	

// 	Defines controller params as $scopes
   	$scope.storage = $localStorage;
   	$scope.routeParams = $routeParams; 
   	$scope.slug = $scope.routeParams.slug;
   	console.log($scope.routeParams);
   
   	
//  Grabs list data by slug with route params	
   	$scope.savedLists = $scope.storage.savedLists;
   	console.log($scope.savedLists);

   	$scope.listName = $scope.savedLists.key;





   	// Check if saved lists exists
   	if ($scope.savedLists) {
   	  console.log('loaded saved word lists');
   	}
   	else {
   	  $localStorage.savedLists = {};
   	  $scope.savedLists = $localStorage.savedLists;
   	  console.log('initalized saved word lists');
   	}

   	// if ($scope.savedLists.name = $scope.slug) {
   	// 	$scope.currentList = s
   	// }

   	// $scope.currentList = $scope.savedLists.slug;
   	// console.log($scope.currentList);





   	   //  Tests to see if list data matches route params
        // for (var i = 0; i < $scope.storage.savedLists.length; i++) {
        //     if ($scope.storage.savedLists[i].slug == $routeParams.slug){
        //         $scope.currentList = $scope.storage.savedLists[i];
        //     }
        // } 

        // console.log($scope.currentList);

        // $scope.currentListData = {
        //     'name': $scope.currentList.name,
        //     'slug': $scope.currentList.slug,
        //     // words type stored in an array
        //     'words': $scope.selectedWords 
        // };
  });
