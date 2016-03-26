(function(){
    var myApp = angular.module('mainApp',['ngRoute']);
  myApp.controller("nav", function($scope){
    $scope.message = "I'm Working ";
  });
})();//end function
