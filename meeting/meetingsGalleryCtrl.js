app.controller("meetingsGalleryCtrl", function ($scope, meetings, $http, $log, $routeParams, $location) {
    
    
        
    
   // console.log($scope.meetings);*/
   $http.get("data/meet.json").then(function mySuccess(response) {
    console.log("success open file meet.json");
    meetings.setMeets(response.data);                          
    $scope.meetings = meetings.getAll(); 
    console.log($scope.meetings);                                                        
},  function myError(response) {
    console.log("error open file meet.json");
});

 $scope.openDetails = function (index) {       
           
        $location.path("/meet/" + index)
    }
           

}) 