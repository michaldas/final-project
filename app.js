var app = angular.module("meetApp" ,["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "home.html"
      
    })
    .when("/meet", {
      templateUrl: "meeting/meetingsGallery.html",
      controller: "meetingsGalleryCtrl"
    })
    .when("/login", {
        templateUrl: "login/login.html",
        controller: "loginCtrl"
      })
    
    .otherwise({
      redirectTo: "/"
    });
    
  });