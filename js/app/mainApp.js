(function(){
  // CREATE A MODULE AND NAME IT
  // Also include the ngRoute for all our routing
var myApp = angular.module('mainApp',['ui.router']);


myApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise('/home');

$stateProvider
.state('home',{
  url:'/home',
  templateUrl:'/pages/home.html',
  controller:'homeCrt'
})
.state('structure',{
  url:'/structure',
  templateUrl:'pages/structure.html',
  controller:'structureCrt'
}).state('navigatingv5', {
  url: "/navigatingv5",
  templateUrl: "pages/navigatingv5.html"
})
.state('createNew', {
  url: "/createNew",
  templateUrl: "pages/createNew.html",
  controller:'createnewCrt'
})
.state('responsive', {
  url: "/responsive",
  templateUrl: "pages/responsive.html"
})
.state('javascript', {
  url: "/javascript",
  templateUrl: "pages/javascript.html"
});
  // end config
}]);

 myApp.controller('homeCrt', function($scope){
   $scope.heading = "V5 Guide";
 });
 myApp.controller('createnewCrt', function($scope){
   $scope.heading = "Create a new website";
 });
 myApp.controller('navigateCrt', function($scope){
   $scope.heading = "Navigate V5";
 });
 myApp.controller('resposiveCrt', function($scope){
   $scope.heading = "Setting up responsive";
 });
 myApp.controller('structureCrt', function($scope){
   $scope.heading = "V5 Main html structure";
 });

})();//end function
