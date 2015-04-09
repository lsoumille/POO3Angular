'use strict';

/**
 * @ngdoc overview
 * @name javaScriptApp
 * @description
 * # javaScriptApp
 *
 * Main module of the application.
 */
angular
  .module('javaScriptApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl'
      })
      .when('/cursus', {
        templateUrl: 'views/cursus.html',
        controller: 'CursusCtrl'
      })
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .when('/projet', {
        templateUrl: 'views/projet.html',
        controller: 'ProjetCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        templateUrl:'views/main.html',
        controller:'MainCtrl'
      });
  });
