(function() {

  'use strict';

  angular
    .module('instrumentApp')
    .controller('homeController', function($scope) {
      $scope.title = 'Home';
      $scope.message = 'Welcome to Instrumap!  This is an interactive tool and central location for beginning musicians to find fingering charts for their instrument.';
      $scope.instructions = 'Click on the compass above to search for your instrument.  Then select the note on the keyboard for the fingering you would like to learn.';
    });