var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){ 
    $scope.hideThis = 0;
    $scope.showThis = 0;
    $scope.counter = 1;
    $scope.isClicked = false; 
    $scope.reset = function(){
        if($scope.counter == ""){
            $scope.counter = 1;     
        }
    }
    $scope.increment = function(){
        $scope.counter = Number($scope.counter) + 1;
    }
    
});