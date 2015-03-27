(function (define) {
    define([
        'controllers/password.controller'
    ], function (passwordController) {
        return function ($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'views/main.html'
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