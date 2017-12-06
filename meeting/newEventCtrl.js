app.controller("newEventCtrl", function ($scope, $location, meetings, activeUser, Meet) {
    
        // If the user is not logged in going back to home screen
       /* if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }*/
    $scope.user = activeUser.get();
   // alert(JSON.stringify($scope.user.email));

        $scope.meet = new Meet({});
    
        $scope.cancel = function () {
            $location.path("/meet");
        }
    
        $scope.create = function () {
            
            var newMeet = new Meet($scope.title, $scope.date, $scope.time, $scope.location, $scope.user.email);
            meetings.addMeet(newMeet);
            var meets = meetings.getAll();
            $location.path("/meet/" + (meets.length -1) );
        }

        
    });
    