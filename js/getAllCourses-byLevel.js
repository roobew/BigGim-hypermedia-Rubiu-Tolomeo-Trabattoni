var app = angular.module("myApp", []);

//****** controller to show ALL THE CATEGORIES ******\\
app.controller("basicCtrl", function($scope, $http) {
  $http.get("http://hypermediabiggym.altervista.org/AllCourses-byLevel/getAllCourses-levelBasic.php").
    success(function(data, status, headers, config) {
      //console.log("basic ok");
      $scope.basicCourseList = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});

app.controller("mediumCtrl", function($scope, $http) {
  $http.get("http://hypermediabiggym.altervista.org/AllCourses-byLevel/getAllCourses-levelMedium.php").
    success(function(data, status, headers, config) {
      //console.log("medium ok");
      $scope.mediumCourseList = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});

app.controller("advancedCtrl", function($scope, $http) {
  $http.get("http://hypermediabiggym.altervista.org/AllCourses-byLevel/getAllCourses-levelAdvanced.php").
    success(function(data, status, headers, config) {
      //console.log("advanced ok");
      $scope.advancedCourseList = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});
