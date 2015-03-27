define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name yeomanShowcaseApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the yeomanShowcaseApp
   */
  angular.module('yeomanShowcaseApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
