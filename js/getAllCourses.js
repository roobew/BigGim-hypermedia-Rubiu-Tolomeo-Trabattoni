var app = angular.module("myApp", []);

//****** controller to show ALL THE CATEGORIES ******\\
app.controller("courseContainerCtrl", function($scope, $http) {
  $http.get("http://hypermediabiggym.altervista.org/AllCourses-AlphabeticOrder/getAllCourses.php").
    success(function(data, status, headers, config) {
      console.log("pronto");
      $scope.allCourseList = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});