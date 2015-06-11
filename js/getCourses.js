var app = angular.module("Courses", []);

app.controller("CoursesCtrl", function($scope, $http) {
  $http.get("http://hypermediabiggym.altervista.org/getCourses.php").
    success(function(data, status, headers, config) {
      $scope.courses = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});
