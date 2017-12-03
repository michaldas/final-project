app.controller("meetDetailsCtrl", function ($scope, meetings, activeUser,  $routeParams, Meet, $http) {
 //   $scope.meetings = []; 
    
    $scope.meet = meetings.get($routeParams.meetIndex);
 /* for (var index = 0; index < mee.length; index++) {
      var element = array[index];
      
  }*/
 //  $scope.task =  getTask(index);
     
 
    
});

