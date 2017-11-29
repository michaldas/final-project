app.controller("invitedCtrl", function($scope, invited, inviteds){
    
          
    $scope.inviteds = [];
    $scope.addInvited = function(){
     $scope.inviteds.push(new invited( $scope.name, $scope.amount));
     $scope.name = "";
     $scope.amount = "";
     
    }
    
    
    
    
    
    });
    