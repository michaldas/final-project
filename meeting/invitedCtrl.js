app.controller("invitedCtrl", function($scope, Invited, inviteds){
    
          
    $scope.inviteds = [];
    $scope.addInvited = function(){
     $scope.inviteds.push(new Invited( $scope.name, $scope.amount, completed = false));
     $scope.name = "";
     $scope.amount = "";
     
    }
    $scope.sumInvited = function() {
        var sum = 0;
        for( var i = 0; i<$scope.inviteds.length; i++){
          sum = sum + parseInt ($scope.inviteds[i].amount);
        }
        return sum ;  
        }
    
    
    
    
    
    
    });
    