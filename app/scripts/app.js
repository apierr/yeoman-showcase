(function (define){
 /*jshint unused: vars */
    define([
        'angular',
        'route',
        'controllers/main'
    ], function (angular, route){
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



