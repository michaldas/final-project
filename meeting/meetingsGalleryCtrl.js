app.controller("meetingsGalleryCtrl", function ($scope, meetings, $http, Meet) {
    
        // Read once data from json
        // When getting the reply from http load (set the data) to the meetings service
        $http.get("data/meet.json").then(function (response) {
            $scope.meetings = [];
            for (var i = 0; i < response.data.length; i++) {
                $scope.meetings.push(new Meet(response.data[i].title, response.data[i].date, response.data[i].time, response.data[i].location, response.data[i].createdBy, response.data[i].tasks.addTask, response.data[i].costs, response.data[i].inviteds));
            }
            console.log($scope.meetings);
    })
}) 