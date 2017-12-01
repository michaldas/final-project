app.controller("meetDetailsCtrl", function ($scope, Meet, meetings, activeUser,  $routeParams, Meet) {
    $scope.meetings = []; 
    
    $scope.meeting = new Meet(meetings.get($routeParams.meetIndex));
    console.log($scope.meeting);
});

