app.controller("meetDetailsCtrl", function ($scope, meetings, activeUser,  $routeParams, Meet, $http, Task) {
 //   $scope.meetings = []; 
    
    $scope.meet = meetings.get($routeParams.meetIndex);



   $scope.addTask = function() {
        var task = new Task(item = $scope.formTaskItem, amount = $scope.formTaskAmount, completed = false);
        $scope.meet.addTask(task);
        $scope.formTaskItem = "";
        $scope.formTaskAmount = "";
    }
    
 /* for (var index = 0; index < mee.length; index++) {
      var element = array[index];
      
      
$scope.tasks.push(new Task(item = $scope.formTaskItem, amount = $scope.formTaskAmount, completed = false));
      $scope.formTaskItem = "";
      $scope.formTaskAmount = "";


  }*/
 //  $scope.task =  getTask(index);
     
 
    
});

