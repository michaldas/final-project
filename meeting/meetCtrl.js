app.controller("meetCtrl", function ($scope, Meet, meetings, tasks, costs, inviteds, recipes, activeUser,  $routeParams, Meet) {
  //  $scope.meetings = [];
    $scope.addMeet = function () {
        $scope.meetings.push(new Meet($scope.title, $scope.date, $scope.time, $scope.location));
        $scope.title = "";
        $scope.date = "";
        $scope.time = "";
        $scope.location = "";
    }
    

  /*  $scope.meeting = new Meet(recipes.get($routeParams.meetIndex));
    console.log($scope.meeting);*/
});



