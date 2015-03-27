(function (define){
 /*jshint unused: vars */
    define([
        'angular',
        'route',
        'controllers/main', 
        'controllers/about'
    ], function (angular, route, MainCtrl, AboutCtrl)/*invoke*/ {
        'use strict';

        /**
        * @ngdoc overview
        * @name yeomanShowcaseApp
        * @description
        * # yeomanShowcaseApp
        *
        * Main module of the application.
        */
        return angular
            .module('yeomanShowcaseApp', [
                'yeomanShowcaseApp.controllers.MainCtrl',
                'yeomanShowcaseApp.controllers.AboutCtrl',
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngRoute',
                'ngAnimate',
                'ngTouch'
            ])
        .config(route);
    });   
})(this.define);



