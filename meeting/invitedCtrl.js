app.controller("invitedCtrl", function($scope, Invited){
    
          
    $scope.inviteds = [];
    $scope.addInvited = function(){
     $scope.inviteds.push(new Invited( $scope.name, $scope.amount, completed = false));
     $scope.name = "";
     $scope.amount = "";
     
    }

    
    
    
    
    
    });
    