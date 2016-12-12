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
    'ngPrint',
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
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
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
      .when('/print/:slug', {
        templateUrl: 'views/print.html',
        controller: 'PrintCtrl',
        controllerAs: 'print'
      })
      .when('/current-list/:slug', {
        templateUrl: 'views/current-list.html',
        controller: 'CurrentListCtrl',
        controllerAs: 'currentList'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
