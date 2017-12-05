app.controller("meetDetailsCtrl", function ($scope, meetings, activeUser,  $routeParams, Meet, $http, Task, $location, Cost, Invited ) {
 //   $scope.meetings = []; 
 $scope.user = activeUser.get();
  alert(JSON.stringify($scope.user.email));

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

$scope.clearCompletedInv = function() {
    var oldList = $scope.meet.inviteds;
    $scope.meet.inviteds = [];
    angular.forEach(oldList, function(x) {
      if (!x.completed) $scope.meet.inviteds.push(x);
    });
  }
   $scope.showCompletedInv = function() {
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
    }
    
 
    $scope.sumConfirm = function() {
      var sum = 0;
      for( var i = 0; i<$scope.meet.inviteds.length; i++){
       if ($scope.meet.inviteds[i].completed == true) {
        sum = sum + parseInt ($scope.meet.inviteds[i].amount); }
        
      }
      return sum ;
    }




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
//is manager
      $scope. isManager = function(){
        if($scope.user.email === $scope.meet.createdBy){
        //  alert("event manager");
          return true;

        }else{
       //   alert(" not event manager");
          return false;
        }
         
    }
    $scope. isNotManager = function(){
      if($scope.user.email !== $scope.meet.createdBy){
      //  alert("not event manager");
        return true;

      }else{
     //   alert("  event manager");
        return false;
      }
    }
//check if invited
$scope.isInvited = function() {
  for( var i = 0; i<$scope.meet.inviteds.length; i++){
    if($scope.user.lastName === $scope.meet.inviteds[i].name) {
        return true;
    } return false;
  }
  }
$scope.notComming = function(){
  
  for( var i = 0; i<$scope.meet.inviteds.length; i++){
   // alert($scope.meet.inviteds[i].name);
    alert(JSON.stringify($scope.user.lastName));
    if($scope.user.lastName === $scope.meet.inviteds[i].name) {
      $scope.meet.inviteds[i].amount = 0;
      $scope.meet.inviteds[i].completed = true;
      alert("invited");
   
    }
  }
}
$scope.confirm = function(){
  for( var i = 0; i<$scope.meet.inviteds.length; i++){
  if($scope.user.lastName === $scope.meet.inviteds[i].name) {
    $scope.meet.inviteds[i].amount = $scope.formInvitedConfirm;
    $scope.meet.inviteds[i].completed = true;
    var element = document.getElementById("confirm");
    element.classList.toggle("hide");
}
}
}
$scope.comming = function(){
  var element = document.getElementById("confirm");
  element.classList.remove("hide");
 // element.classList.toggle("show");
}




});

