'use strict';

/**
 * @ngdoc function
 * @name sightWordsApp.controller:CurrentListCtrl
 * @description
 * # CurrentListCtrl
 * Controller of the sightWordsApp
 */
angular.module('sightWordsApp')
  .controller('CurrentListCtrl', function ($scope, search, $localStorage, $routeParams) {
  	

  	//API Search Query
  	   $scope.refreshsearch = function(term){
  	      $scope.suggestedWords = search.query({
  	        s: term 
  	      });
  	    };


  	//Define Global Variables
  		$scope.storage = $localStorage;
  	    $scope.savedLists = $scope.storage.savedLists;
  	    $scope.slug = $routeParams.slug;
   		console.log($scope.slug);
  	    // object that stores an array of words selected by user
  	    
  	    

  	//  Grabs list data by slug with $routeParams	
  	   	$scope.savedLists = $scope.storage.savedLists;
  	   	console.log($scope.savedLists);
  	   	$scope.currentList = $scope.savedLists[$scope.slug];
  	   	console.log($scope.currentList);
  		//	Adds $scope to words in currentList 
  		$scope.selectedWords = $scope.currentList.words;

  	//	Saves list with the same name
  		$scope.displayText = $scope.currentList.name;


  	// Check if saveLists exists, add savedLists if 
  	    if ($scope.savedLists) {
  	      console.log('loaded saved word lists');
  	    }
  	    else {
  	      $scope.storage.savedLists = {};
  	      $scope.savedLists = $scope.storage.savedLists;
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
  	        if ($scope.savedLists) {
  	          console.log('list data saved');
  	        }
  	        else {
  	          $scope.storage.savedLists = {};
  	          $scope.savedLists = $scope.storage.savedLists;
  	          console.log('savedLists added to localStorage, list data saved.');
  	        }
  	        // Saves list Data
  	        $scope.savedLists[slug] = listData;
  	    
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
  	      $scope.selectedWords.splice(wordIndex, 1);

  	    };

  });
