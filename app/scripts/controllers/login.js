'use strict';

/**
 * @ngdoc function
 * @name sightWordsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the sightWordsApp
 */
angular.module('sightWordsApp')
  .controller('LoginCtrl', function(auth) {
    $scope.signin = function() {
  	  auth.signin({
  	    authParams: {
  	      scope: 'openid name email' // Specify the scopes you want to retrieve
  	    }
  	  }, function(profile, idToken, accessToken, state, refreshToken) {
  	    $location.path('/user-info');
  	  }, function(err) {
  	    console.log("Error :(", err);
  	  });
  	};
  });
