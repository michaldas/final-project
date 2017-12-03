app.controller("newEventCtrl", function ($scope, $location, meetings, activeUser, Meet) {
    
        // If the user is not logged in going back to home screen
       /* if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }*/
    
        $scope.meet = new Meet({});
    
        $scope.cancel = function () {
            $location.path("/meet");
        }
    
        $scope.create = function () {
            var newMeet = new Meet($scope.title, $scope.date, $scope.time, $scope.location);
            meetings.addMeet(newMeet);
            var meets = meetings.getAll();
          //  $location.path("/meet/" + meetings.getAll().length - 1);
          $location.path("/meet/" + (meets.length -1) );
        }
    });
    