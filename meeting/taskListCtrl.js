app.controller("taskListCtrl", function($scope, Task, tasks, Meet) {
  
  
    $scope.tasks = [new Task("cola", "2", completed = false),
      new Task("water", "4", completed = false),
      new Task("wine", "1", completed = false),
    ];
  
    $scope.addTask = function() {
      // create task object: var task = new Task($scope.taskItem, $scope)
      // add task object to meeting: meeting.addTask(task)


      $scope.tasks.push(new Task(item = $scope.formTaskItem, amount = $scope.formTaskAmount, completed = false));
      $scope.formTaskItem = "";
      $scope.formTaskAmount = "";
    }
    $scope.delete = function() {
      $scope.tasks.splice(this.$index, 1);
    }
  
    $scope.clearCompleted = function() {
      var oldList = $scope.tasks;
      $scope.tasks = [];
      angular.forEach(oldList, function(x) {
        if (!x.completed) $scope.tasks.push(x);
      });
    }
     $scope.showCompleted = function() {
      var oldList = $scope.tasks;
      $scope.tasks = [];
      angular.forEach(oldList, function(x) {
        if (x.completed) $scope.tasks.push(x);
      });
    }
<<<<<<< HEAD

=======
 

 
  console.log($scope.tasks.length);
 

>>>>>>> 392397039ef9fd73d5b1befde2f064c9dfd4e7f9
  
  $scope.sumTask = function() {
    var sum = 0;
   
    for( var i = 0; i<$scope.tasks.length; i++){
      sum = sum + parseInt ($scope.tasks[i].amount);
    }
    return sum ;  
    }
  
  
    
  
  
  });