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



$(document).ready(ready);

function ready() {
    console.log("I'm ready!");
    //var id=1;


 $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://hypermediabiggym.altervista.org/getCourse.php", //Relative or absolute path to file.php file
     data: { 'dato' : '1' },
        success: function(response) {
                console.log(JSON.parse(response));
                var location=JSON.parse(response);
                $(".courseName").html(location[0].nome);
                $(".descr").html(location[0].description);
                $("#img1").attr("src" , location[0].img1);
                $("#img2").attr("src" , location[0].img2);
                $("target").html(location[0].target);
                $("level").html(location[0].level);
                $("spec").html(location[0].specialFeatures);
                $("#img3").attr("src" , location[0].img3);


        },
        error: function(request,error)
        {
            alert(error);
            console.log("Error");
        }
    });
}
