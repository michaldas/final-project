
app.controller("costsCtrl", function($scope, Cost, costs, Meet){
    
          
    $scope.costs = [];
    $scope.addCost = function(){
     $scope.costs.push(new Cost( $scope.costelement, $scope.amount));
     $scope.costelement = "";
     $scope.amount = "";
     
    }
    
    $scope.sumCost = function() {
        var sum = 0;
        for( var i = 0; i<$scope.costs.length; i++){
          sum = sum + parseInt ($scope.costs[i].amount);
        }
        return sum ;  
        }
    
    
    
    });
    
  
    
    
    
    
    
    
    
    
    