var app = angular.module("TaughtCourses", []);

app.controller("TaughtCoursesCtrl", function($scope, $http) {
    var idIns =  getUrlParameters("idIns", "", true);
  $http({
      url:"http://hypermediabiggym.altervista.org/Instructor/getTaughtCourses.php",
      method: "POST",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: $.param({dato: idIns})
      }).success(function(data, status, headers, config) {
      $scope.taughtCourses = data;
      }).
    error(function(data, status, headers, config) {
      // log error
    });
});
