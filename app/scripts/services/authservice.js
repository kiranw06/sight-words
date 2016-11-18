'use strict';

/**
 * @ngdoc service
 * @name sightWordsApp.authservice
 * @description
 * # authservice
 * Factory in the sightWordsApp.
 */
angular.module('sightWordsApp')
  .factory('authService', function authService(lock, authManager) {

    function login() {
      lock.show();
    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    function registerAuthenticationListener() {
      lock.on('authenticated', function (authResult) {
        localStorage.setItem('id_token', authResult.idToken);
        authManager.authenticate();
      });
    }

    return {
      login: login,
      registerAuthenticationListener: registerAuthenticationListener
    };
    
  });
