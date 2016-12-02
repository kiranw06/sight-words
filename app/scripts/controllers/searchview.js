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


//Define Global Variables
    $scope.savedLists = $localStorage.savedLists;
    $scope.displayText = "";
    // object that stores an array of words selected by user
    $scope.selectedWords = [];
    

    

    // Check if saved lists exists
    if ($scope.savedLists) {
    	console.log('loaded saved word lists');
    }
    else {
    	$localStorage.savedLists = {};
    	$scope.savedLists = $localStorage.savedLists;
    	console.log('initalized saved word lists');
    }


    // Makes slug for list name type
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
            'slug': slug,
       	    // words type stored in an array
       	    'words': $scope.selectedWords 
       	};

       // Add data to local storage	
       $localStorage.savedLists[slug] = listData;     
    };

    
    // Select/Deselect words
    $scope.selectWord = function(word){
    	if ($scope.selectedWords.indexOf(word) < 0){
        $scope.selectedWords.push(word);
      }
      else {
        console.log("word already saved");
      }
      
    };

    $scope.deselectWord = function(word){
      // finds clicked word
      
      console.log(word);
      // finds position of word in array
      var wordIndex = $scope.selectedWords.indexOf(word);
      console.log(wordIndex);

      $scope.selectedWords.splice($scope.wordIndex, 1);
    };

});