'use strict';

/**
 * @ngdoc overview
 * @name sightWordsApp
 * @description
 * # sightWordsApp
 *
 * Main module of the application.
 */
angular
  .module('sightWordsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'auth0', 
    'ngTouch'
  ])
  .config(function ($routeProvider, authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/starter', {
        templateUrl: 'views/starter.html',
        controller: 'StarterCtrl',
        controllerAs: 'starter'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
    authProvider.init({
      domain: 'kiranw.auth0.com',
      clientID: 'JULTb6aQTqHiO8c4L6lzCIl0mHza4DCY',
      loginUrl: 'views/login'
    });
  })
  .run(function(auth) {
    auth.hookEvents();
  });
