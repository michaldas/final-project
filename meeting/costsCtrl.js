
app.controller("costsCtrl", function($scope, Cost){
    
          
    $scope.costs = [];
    $scope.addCost = function(){
     $scope.costs.push(new Cost( $scope.costelement, $scope.amount));
     $scope.costelement = "";
     $scope.amount = "";
     
    }
    
    
    
    
    
    });
    
  
    
    
    
    
    
    
    
    
    