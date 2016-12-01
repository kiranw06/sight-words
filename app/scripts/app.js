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
    'ngStorage',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
      .when('/searchview', {
        templateUrl: 'views/searchview.html',
        controller: 'SearchviewCtrl',
        controllerAs: 'searchview'
      })
      .when('/newlist', {
        templateUrl: 'views/newlist.html',
        controller: 'NewlistCtrl',
        controllerAs: 'newlist'
      })
      .when('/print', {
        templateUrl: 'views/print.html',
        controller: 'PrintCtrl',
        controllerAs: 'print'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
