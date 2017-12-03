app.controller("meetDetailsCtrl", function ($scope, meetings, activeUser,  $routeParams, Meet, $http, Task) {
 //   $scope.meetings = []; 
    
    $scope.meet = meetings.get($routeParams.meetIndex);



   $scope.addTask = function() {
        var task = new Task($scope.item,$scope.amount, $scope.completed);
        $scope.meet.addTask(task);
    }
    
 /* for (var index = 0; index < mee.length; index++) {
      var element = array[index];
      
  }*/
 //  $scope.task =  getTask(index);
     
 
    
});

