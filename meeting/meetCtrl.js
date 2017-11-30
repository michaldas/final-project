<<<<<<< HEAD
app.controller("meetCtrl", function ($scope, Meet, meetings, tasks, costs, inviteds) {
    $scope.meetings = [];
    $scope.addMeet = function () {
        $scope.meetings.push(new Meet($scope.title, $scope.date, $scope.time, $scope.location));
        $scope.title = "";
        $scope.date = "";
        $scope.time = "";
        $scope.location = "";
    }
    
=======
app.controller("meetCtrl", function($scope, Meet, meetings, tasks, costs, inviteds){
$scope.meetings = [];
$scope.addMeet = function(){
 $scope.meetings.push(new Meet( $scope.title, $scope.date,  $scope.time, $scope.location));
 $scope.title = "";
 $scope.date = "";
 $scope.time = "";
 $scope.location = "";
}

>>>>>>> 392397039ef9fd73d5b1befde2f064c9dfd4e7f9



});



