(function(){
  // CREATE A MODULE AND NAME IT
  // Also include the ngRoute for all our routing
var myApp = angular.module('mainApp',['ui.router']);


myApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){

$urlRouterProvider.otherwise('/');


$stateProvider
.state('home',{
  url:'/',
  templateUrl:'/pages/home.html',
  controller:'homeCtr'
})
.state('structure',{
  url:'/structure',
  templateUrl:'pages/structure.html',
  controller:'structureCtr'
}).state('navigatingv5', {
  url: "/navigatingv5",
  templateUrl: "pages/navigatingv5.html",
  controller:'navigateCtr'
})
.state('createNew', {
  url: "/createNew",
  templateUrl: "pages/createNew.html",
  controller:'createnewCtr'
})
.state('responsive', {
  url: "/responsive",
  templateUrl: "pages/responsive.html",
  controller:'resposiveCtr'
})
.state('javascript', {
  url: "/javascript",
  templateUrl: "pages/javascript.html",
  controller:'javascriptCtr'
});


  // end config
}]);

 myApp.controller('homeCtr', function($scope){
   $scope.heading = "V5 Guide Contents";
   $scope.pageDescription = "Welcome to v5 guide"
   $scope.pageHeading = 'Contents';
 });
 myApp.controller('createnewCtr', function($scope){
   $scope.heading = "Create a new website";
    $scope.pageHeading = 'How To Create a New Website';
 });
 myApp.controller('navigateCtr', function($scope){
   $scope.heading = "Navigate V5";
   $scope.pageHeading = 'How To Move Around V5';
 });
 myApp.controller('resposiveCtr', function($scope){
   $scope.heading = "Setting up responsive";
   $scope.pageHeading = 'Setting Up Responsive';
 });
 myApp.controller('structureCtr', function($scope){
   $scope.heading = "V5 Main html structure";
   $scope.pageHeading = 'V5 HTML Node Structure';
 });
 myApp.controller('javascriptCtr',function($scope){
   $scope.heading = 'Javascript Functions';
   $scope.pageHeading = 'Custom Javascript Medoths';
 });

})();//end function
