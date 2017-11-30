app.controller("loginCtrl", function($scope, $location, $http, User, activeUser){
  
    $http.get("data/users.json").then(function (response) {
       $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }
    
        console.log(JSON.stringify($scope.users));
          
    
    });
   
   
   
    $scope.failedAttempt = false;
   
    
        $scope.login = function() {
            var user = getLoggedInUser();
            if (user != null) {
               activeUser.login(user);
               // $uibModalInstance.close("Logged-in");
                $location.path("/meet");
           } else {
                $scope.failedAttempt = true;
            }
    
            console.log($scope.email + " " + $scope.password);
        }
    
        var getLoggedInUser = function() {
            console.log ($scope.users[0]);
            for (var i = 0; i < $scope.users.length; i++) {
               console.log ($scope.users[i]);
                if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                    console.log ($scope.users[i]);
                    return $scope.users[i];

                    
                }
            }
            return null;
        }
    
      //  $scope.dismiss = function () {
      //      $uibModalInstance.close("User dismissed");
      //  }
   // });*/
    
   

$http.get("data/users.json").then(function (response) {
    $scope.users = [];
    for (var i = 0; i < response.data.length; i++) {
        $scope.users.push(new User(response.data[i]));
    }

   // console.log(JSON.stringify($scope.users));


});
});