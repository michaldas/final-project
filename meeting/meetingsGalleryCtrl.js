app.controller("meetingsGalleryCtrl", function ($scope, meetings, $http, $log, $routeParams, $location) {
    
        // Read once data from json
        // When getting the reply from http load (set the data) to the meetings service
      /*  $http.get("data/meet.json").then(function (response) {
            $scope.meetings = [];
            for (var i = 0; i < response.data.length; i++) {
                $scope.meetings.push(new Meet(response.data[i].title, response.data[i].date, response.data[i].time, response.data[i].location, response.data[i].createdBy, response.data[i].setTasks, response.data[i].setCosts, response.data[i].inviteds));
            //  $scope.meetings.push(new Meet(response.data[i].setMeets)); 
            }
            console.log($scope.meetings);
          //  console.log($scope.meetings[0].tasks.setTasks);
    })
   // $http.get("data/meet.json").then(function mySuccess(response) {
        // Updating the service with the data
      //  for (var index = 0; index < response.data.length; index++) {
        //    $scope.meetings.push(new Meet(response.data[index]))
            
       // }
        
    
   // console.log($scope.meetings);*/
   $http.get("data/meet.json").then(function mySuccess(response) {
    console.log("success open file meet.json");
    meetings.setMeets(response.data);                          
    $scope.meetings = meetings.getAll(); 
    console.log($scope.meetings);                                                        
},  function myError(response) {
    console.log("error open file actors.json");
});

//console.log("start meetDetails Controller " + $routeParams.index);
// $scope.meeting = meetings.getMeetById($routeParams.index);  
 $scope.openDetails = function (index) {       
       // var meetIndex = $scope.meeting.indexOf(meet);       
        $location.path("/meet/" + index)
    }
           

}) 