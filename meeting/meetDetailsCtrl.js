app.controller("meetDetailsCtrl", function ($scope, meetings, activeUser,  $routeParams, Meet, $http, Task, Cost) {
 //   $scope.meetings = []; 
    
    $scope.meet = meetings.get($routeParams.meetIndex);



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
      
      $scope.addCost = function addCost() {
       var cost = new cost(costelement = $scope.formCostelement, amount = $scope.formAmount) ;
       $scope.meet.addCost(cost);
       $scope.formCostelement = "";
       $scope.formAmount = "";
   }
   $scope.removeCost = function() {
       $scope.meet.costs.splice(this.$index, 1); 
   }

   
     
 
    
});

