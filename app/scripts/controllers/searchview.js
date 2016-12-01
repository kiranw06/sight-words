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
    $scope.savedLists = $localStorage.savedLists;

    
    // Check if saved lists exists
    if ($scope.savedLists) {
    	console.log('loaded saved word lists');
    }
    else {
    	$localStorage.savedLists = {};
    	$scope.savedLists = $localStorage.savedLists;
    	console.log('initalized saved word lists');
    }


   // Makes slug for list name
   function slugify(text){
     return text.toString().toLowerCase()
       .replace(/\s+/g, '')           // Replace spaces with nothing
       .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
       .replace(/\-\-+/g, '-')         // Replace multiple - with single -
       .replace(/^-+/, '')             // Trim - from start of text
       .replace(/-+$/, '');            // Trim - from end of text
   }
   
    
    //Stores List Data
	$scope.saveList = function(text){
	   
		var slug = slugify(text);
	   	var listData = {
	   	    'name': text,
	   	    // TODO how to input words?
	   	    'words': $scope.selectedWords,
	   	    'slug': slug 
	   	};
	   // Add data to local storage	
	   $localStorage.savedLists[slug] = listData;  

	};


	//TODO Error?
    $scope.displayText = "";

    $scope.selectedWords = [];

    $scope.selectWord = function(word){

    	$scope.selectedWords.push(word);

    };



});
