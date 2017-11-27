app.controller("meetCtrl", function($scope, Meet){

$scope.addMeet = function(){
 $scope.meetings.push(new Meet(title = $scope.title, date = $scope.date, time = $scope.time));
 $scope.title = "";
 $scope.date = "";
 $scope.time = "";
}





});



