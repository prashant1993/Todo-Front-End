var app = angular.module('myApp',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'template/login.html',
        controller : 'loginController'
      })
        .state('signUp', {
          url : '/signUp',
          templateUrl : 'template/signUp.html',
          controller : 'signUpController'
        })
          .state('home', {
            url : '/home',
            templateUrl : 'template/home.html',
            controller : 'homeController'
          });
    }]);
