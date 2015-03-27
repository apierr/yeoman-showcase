(function (define) {
    define([
        'controllers/main',
        'controllers/password.controller'
    ], function (mainController, passwordController) {
        return function ($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: mainController
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: passwordController
            })
            .otherwise({
                redirectTo: '/'
            });
        }
    });
}(this.define));