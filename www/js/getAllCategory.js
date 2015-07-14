/*$(document).ready(getAllCategoryData);

function getAllCategoryData() {
    console.log("I'm ready!");


 $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://hypermediabiggym.altervista.org/getAllCategory.php", //Relative or absolute path to file.php file
        success: function(response) {
                console.log(JSON.parse(response));
                var category=JSON.parse(response);
                $(".nameCategory1").html(category[0].name);
                $(".descriptionCategory1").html(category[0].shortDescription);
                $(".imageGAG").attr("src",category[0].img);

                $(".nameCategory2").html(category[1].name);
                $(".descriptionCategory2").html(category[1].shortDescription);
                $(".imagePilates").attr("src",category[1].img);

                $(".nameCategory3").html(category[2].name);
                $(".descriptionCategory3").html(category[2].shortDescription);
                $(".imageSpinning").attr("src",category[2].img);
        },
        error: function(request,error)
        {
            alert(error);
            console.log("Error");
        }
    });
}*/

var app = angular.module("Category", []);

app.controller("CategoryCtrl", function($scope, $http) {
  $http.get("http://hypermediabiggym.altervista.org/AllCategory/getAllCategory.php").
    success(function(data, status, headers, config) {
      $scope.categories = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});
