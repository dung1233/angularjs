var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .when('/blog', {
            templateUrl: 'pages/blog.html',
            controller: 'BlogController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'AboutController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('HomeController', function($scope) {
    $scope.message = 'Welcome to the Home page!';
});

app.controller('BlogController', function($scope) {
    $scope.message = 'Check out our latest blog posts!';
});

app.controller('AboutController', function($scope) {
    $scope.message = 'Learn more about our company and team!';
});
