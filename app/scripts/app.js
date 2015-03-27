(function (define){
 /*jshint unused: vars */
    define([
        'angular',
        'route',
        'directives/stateful.directive'
    ], function (angular, route, statefulDirective){
        'use strict';

        var app = angular
            .module('yeomanShowcaseApp', [
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngRoute',
                'ngAnimate',
                'ngTouch'
            ]);

        app.config(route);
        app.directive('nsStateful', statefulDirective);

        return app;
    });   
})(this.define);



