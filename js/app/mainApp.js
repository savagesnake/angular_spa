(function(){
    var myApp = angular.module('mainApp',["ngRoute","events"]);
    config(["$routeProvider"],$locationPorvider,function($routeProvider,$locationProvider){
          $routeProvider.when('/page1',{templateUrl:'partials/navigatingv5'});
          $routeProvider.when('/page2',{templateUrl:'partials/responsive'});
          $routeProvider.when('/page3',{templateUrl:'partials/structure'});
          $routeProvider.otherwise({redirect: '/home'});
        })
    
            $locationProvider.html5Mode({enable:true,requireBase:false});
})()//end function

