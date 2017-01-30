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
              .state('game', {
                url: '/game',
                templateUrl: '../views/game.html',
                controller: 'blackCtrl'
              })
              .state('stats', {
                url: '/stats',
                templateUrl: '../views/stats.html',
                controller: 'homeCtrl'
              })
              $urlRouterProvider.otherwise('/')
});
