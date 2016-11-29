'use strict';

/**
 * @ngdoc function
 * @name sightWordsApp.controller:SearchviewCtrl
 * @description
 * # SearchviewCtrl
 * Controller of the sightWordsApp
 */
angular.module('sightWordsApp')
  .controller('SearchviewCtrl', function ($scope, search, $localStorage) {
 	 $scope.refreshsearch = function(term){
    	$scope.suggestedWords = search.query({
    		s: term 
    	});
    };


    //Define Local Storage
    $scope.storage = $localStorage;
    //TODO Error?
    $scope.listName = "";


    //Stores List Data

	$scope.saveList = function(text){
	   var listData = {
	       'name': text,
	       // TODO how to input words?
	       'words': [],
	   };


        var save = true;

        if (!$scope.storage.savedPatches) {
            $scope.storage.savedPatches = [];
            
        }else {
            for(var i = 0; i < $scope.storage.savedPatches.length; i++){
                if (listData.patchName === $scope.storage.savedPatches[i].patchName){
                    save = false; 
                }
            }
        } 
        


        if (save===true){
            listData.patchId = $scope.storage.savedPatches.length + 1;
            $scope.storage.savedPatches.push(listData);
            $scope.patchSaved = {
                'success': true
            };
        } else {
            console.log('patch already saved');
             $scope.patchSaved = {
                'duplicate': true
            };
     	}

	};



});
