app.controller("meetDetailsCtrl", function ($scope, meetings, activeUser,  $routeParams, Meet, $http, Task, $location, Cost, Invited ) {
 //   $scope.meetings = []; 
    
    $scope.meet = meetings.get($routeParams.meetIndex);

//Tasks

   $scope.addTask = function() {
        var task = new Task(item = $scope.formTaskItem, amount = $scope.formTaskAmount, completed = false);
        $scope.meet.addTask(task);
        $scope.formTaskItem = "";
        $scope.formTaskAmount = "";
    }
    $scope.removeTask = function() {
        $scope.meet.tasks.splice(this.$index, 1); 
    }

    $scope.clearCompleted = function() {
        var oldList = $scope.meet.tasks;
        $scope.meet.tasks = [];
        angular.forEach(oldList, function(x) {
          if (!x.completed) $scope.meet.tasks.push(x);
        });
      }
       $scope.showCompleted = function() {
        var oldList = $scope.meet.tasks;
        $scope.meet.tasks = [];
        angular.forEach(oldList, function(x) {
          if (x.completed) $scope.meet.tasks.push(x);
        });
      }
//invited
$scope.addInvited = function() {
    var invited = new Invited(name = $scope.formInvitedName, amount = $scope.formInvitedAmount, completed = false);
    $scope.meet.addInvited(invited);
    $scope.formInvitedName = "";
    $scope.formInvitedAmount = "";
}
$scope.removeInvited = function() {
    $scope.meet.inviteds.splice(this.$index, 1); 
}

$scope.clearCompleted = function() {
    var oldList = $scope.meet.inviteds;
    $scope.meet.inviteds = [];
    angular.forEach(oldList, function(x) {
      if (!x.completed) $scope.meet.inviteds.push(x);
    });
  }
   $scope.showCompleted = function() {
    var oldList = $scope.meet.inviteds;
    $scope.meet.inviteds = [];
    angular.forEach(oldList, function(x) {
      if (x.completed) $scope.meet.inviteds.push(x);
    });
  }

   $scope.sumInvited = function() {
    var sum = 0;
    for( var i = 0; i<$scope.meet.inviteds.length; i++){
      sum = sum + parseInt ($scope.meet.inviteds[i].amount);
    }
    return sum ;  
    };
 //costs     
      $scope.addCost = function addCost() {
       var cost = new Cost(costelement = $scope.formCostelement, amount = $scope.formAmount) ;
       $scope.meet.addCost(cost);
       $scope.formCostelement = "";
       $scope.formAmount = "";
   }
   $scope.removeCost = function() {
       $scope.meet.costs.splice(this.$index, 1); 
   }
   $scope.sumCost = function() {
    var sum = 0;
    for( var i = 0; i<$scope.meet.costs.length; i++){
      sum = sum + parseInt ($scope.meet.costs[i].amount);
    }
    return sum ;  
    };

   
//Update Button     
      $scope.update = function(){
        $location.path("/meet");
      }
 
    
});

