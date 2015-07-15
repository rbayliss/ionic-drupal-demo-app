// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      url: '/app',
      templateUrl: 'templates/1-welcome.html',
      controller: 'WelcomeCtrl'
    });

    $stateProvider.state('categories', {
      url: '/categories',
      templateUrl: 'templates/2-categories.html',
      controller: 'CategoriesCtrl'
    });

    $stateProvider.state('categoryArticles', {
      url: '/categories/{tid}',
      templateUrl: 'templates/3-category.html',
      controller: 'CategoryCtrl'
    });

    $stateProvider.state('article', {
      url: '/articles/{nid}',
      templateUrl: 'templates/4-article.html',
      controller: 'ArticleCtrl'
    });

    $urlRouterProvider.otherwise("/app");
});
