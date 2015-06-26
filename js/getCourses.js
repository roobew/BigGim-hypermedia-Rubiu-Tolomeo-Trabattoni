var app = angular.module("Courses", []);

app.controller("CoursesCtrl", function($scope, $http) {
  $http.get("http://hypermediabiggym.altervista.org/getCourses.php").
    success(function(data, status, headers, config) {
      $scope.coursesCat = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});

function getUrlParameters(parameter, staticURL, decode){
   /*
    Function: getUrlParameters
    Description: Get the value of URL parameters either from
                 current URL or static URL
    Author: Tirumal
    URL: www.code-tricks.com
   */
   var currLocation = (staticURL.length)? staticURL : window.location.search,
       parArr = currLocation.split("?")[1].split("&"),
       returnBool = true;

   for(var i = 0; i < parArr.length; i++){
        parr = parArr[i].split("=");
        if(parr[0] == parameter){
            return (decode) ? decodeURIComponent(parr[1]) : parr[1];
            returnBool = true;
        }else{
            returnBool = false;
        }
   }

   if(!returnBool) return false;
}

$(document).ready(ready);

function ready() {
    console.log("I'm ready!");
    var idCourse =  getUrlParameters("idCourse", "", true);
 $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://hypermediabiggym.altervista.org/getCourse.php", //Relative or absolute path to file.php file
     data: { 'dato' : idCourse},
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
