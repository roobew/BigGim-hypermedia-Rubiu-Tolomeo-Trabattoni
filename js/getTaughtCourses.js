var app = angular.module("TaughtCourses", []);

app.controller("TaughtCoursesCtrl", function($scope, $http) {
  $http.get("http://hypermediabiggym.altervista.org/Instructor/getTaughtCourses.php").
    success(function(data, status, headers, config) {
      $scope.taughtCourses = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});
