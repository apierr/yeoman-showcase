define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name yeomanShowcaseApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the yeomanShowcaseApp
   */
  angular.module('yeomanShowcaseApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
