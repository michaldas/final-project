app.controller("taskListCtrl", function($scope, Task, tasks) {
  
  
    $scope.tasks = [new Task("cola", "2", completed = false),
      new Task("water", "4", completed = false),
      new Task("wine", "1", completed = false),
    ];
  
    $scope.addTask = function() {
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
  
  
  });