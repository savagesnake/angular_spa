(function(){
    var titleCtrl = angular.module('events',[])
    
    titleCtrl.controller('menu',['$scope',function($scope){
        $scope.menuTitle = ["Navigating V5","Main HTML Structure","Create New Website","Responsive","Javascript Function","Create New Website"]
        $scope.menu = [
            {
                name:"Main HTML Structure",
                href:"#main"
            }
        ]
        
        $scope.index = 0;
        
        $scope.setIndex = function(val){
            $scope.index = val;
        }
        
        $scope.getIndex = function(){
            return($scope.index);
        }
        
        }]);
    
    })();
