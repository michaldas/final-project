app.controller("meetingsGalleryCtrl", function ($scope, meetings, $http, $log, $routeParams, $location, activeUser) {
    
    
    $scope.user = activeUser.get();
    // alert(JSON.stringify($scope.user.email));   
    
   // console.log($scope.meetings);*/
   if (meetings.getAll().length === 0){
    $scope.meetings = []  ; 
   $http.get("data/meet.json").then(function mySuccess(response) {
    console.log("success open file meet.json");
    meetings.setMeets(response.data);                          
    $scope.meetings = meetings.getAll(); 
    console.log($scope.meetings);                                                        
});  
 } else {
    $scope.meetings = meetings.getAll();
   }

   console.log($scope.meetings);  
 $scope.openDetails = function (index) {       
           
        $location.path("/meet/" + index)
    }
           
$scope.newEvent = function () {
    $location.path("/new");
}
$scope. isManager = function(){
    
}
//check if activeUser == createdBY

}); 

