angular.module('cards',['ui.router']).config(function ($stateProvider, $urlRouterProvider){
              $stateProvider
              .state('home', {
                url: '/',
                templateUrl: '../views/home.html',
                controller: 'homeCtrl'
              })
              .state('select', {
                url: '/select',
                templateUrl: '../views/select.html',
                controller: 'homeCtrl'
              })
              .state('black', {
                url: '/black',
                templateUrl: '../views/black.html',
                controller: 'blackCtrl'
              })
              .state('stats', {
                url: '/stats',
                templateUrl: '../views/stats.html',
                controller: 'homeCtrl'
              })
              .state('poker', {
                url: '/poker',
                templateUrl: '../views/poker.html',
                controller: 'texasCtrl'
              })
              $urlRouterProvider.otherwise('/')
});
