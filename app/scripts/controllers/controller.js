'use strict';

/**
 * @ngdoc function
 * @name javaScriptApp.controller:CvCtrl
 * @description
 * # CvCtrl
 * Controller of the javaScriptApp
 */
angular.module('javaScriptApp')
  .controller('CursusCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("data/data.json")
      .success( function(data){
        $scope.descriptionIut = data.cursus.DUT;
        $scope.descriptionPoly= data.cursus.Ingenieur;
      });
  })
  .controller('CvCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.selection = "diplomes";

    $scope.affichDip = function() {
      $scope.selection = "diplomes";
    }

    $scope.affichTech = function() {
      $scope.selection = "technique";
    }

    $scope.affichRea= function() {
      $scope.selection = "rea";
    }

    $scope.affichExp = function() {
      $scope.selection = "experience";
    }

    $scope.affichDip = function() {
      $scope.selection = "diplomes";
    }
    $http.get("data/data.json")
      .success( function(data){
        $scope.ingenieur = data.cv.diplomes.ingenieur;
        $scope.dut = data.cv.diplomes.DUT;
        $scope.bac = data.cv.diplomes.BAC;
        $scope.programmation = data.cv.competences.programmation;
        $scope.web = data.cv.competences.WEB;
        $scope.base = data.cv.competences.Base;
        $scope.reseau = data.cv.competences.Reseau;
        $scope.os = data.cv.competences.OS;
        $scope.logiciels = data.cv.competences.Logiciels;
        $scope.stage = data.cv.experiences.Spir;
        $scope.cours = data.cv.experiences.Cours;
        $scope.c = data.cv.realisations.C;
        $scope.java = data.cv.realisations.JAVA;
        $scope.bootstrap = data.cv.realisations.Bootstrap;
        $scope.mobile = data.cv.realisations.Mobile;
        $scope.opengl = data.cv.realisations.OpenGL;
        $scope.communication = data.cv.realisations.Communication;
      });
  })
  .controller('ExperienceCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("data/data.json")
      .success( function(data){
        $scope.descriptionStage = data.stage.SPIR;
      });
  })
  .controller('ProjetCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("data/data.json")
      .success( function(data){
        $scope.descriptionSec = data.professionnel.missions;
      });
  })
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("data/data.json")
      .success( function(data){
        $scope.description = data.presentation;
      });
  });
