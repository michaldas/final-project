app.controller("invitedCtrl", function($scope, invited){
    
          
    $scope.inviteds = [];
    $scope.addInvited = function(){
     $scope.inviteds.push(new invited( $scope.name, $scope.amount));
     $scope.name = "";
     $scope.amount = "";
     
    }

    
    
    
    
    
    });
    