/*
var app = angular.module("Instructor", []);

app.controller("InstructorCtrl", function($scope, $http) {
  $http.get("http://hypermediabiggym.altervista.org/Instructor/getInstructors.php").
    success(function(data, status, headers, config) {
      $scope.instructors = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});
*/

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
    var idIns =  getUrlParameters("idIns", "", true);

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://hypermediabiggym.altervista.org/Instructor/getInstructors.php", //Relative or absolute path to file.php file
     data: { 'dato' : idIns},
        success: function(response) {
                console.log(JSON.parse(response));
                var instructor=JSON.parse(response);

                $(".name").html(instructor[0].surname + ", " + instructor[0].name);
                $(".bio").html(instructor[0].biography);
                $(".qual").html(instructor[0].qualifications);
                $(".awards").html(instructor[0].awards);
                $("#imageProfile").attr("src" , instructor[0].img);

        },
        error: function(request,error)
        {
            alert(error);
            console.log("Error");
        }
    });
}
