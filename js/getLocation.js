$(document).ready(ready);

function ready() {
    console.log("I'm ready!");
    //var id=1;


 $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://hypermediabiggym.altervista.org/getLocation.php", //Relative or absolute path to file.php file
        success: function(response) {
                console.log(JSON.parse(response));
                var location=JSON.parse(response);
                $(".address").html(location[0].address);
                $(".city").html(location[0].city);
                $(".phone").html(location[0].phone);
                $(".mail").html(location[0].email);
            gMaps(location[0].address+location[0].city);
        },
        error: function(request,error)
        {
            alert(error);
            console.log("Error");
        }
    });
}


    // Google Maps config
///*

function gMaps(address){
    var mapCanvas = document.getElementById('myMap');
    var latitude;
    var longitude;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {

              var myLatLng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());

        var mapOptions = {
        center: myLatLng ,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
  google.maps.event.addDomListener(window, 'load', initialize);
            });



//*/

}
