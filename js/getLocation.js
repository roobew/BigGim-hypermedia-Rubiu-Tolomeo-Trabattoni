$(document).ready(retrieveData);

function retrieveData() {
    console.log("I'm ready!");

 $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://hypermediabiggym.altervista.org/Location/getLocation.php",
        success: function(response) {
                //console.log(response);
                console.log(JSON.parse(response));
                var location=JSON.parse(response);
                $(".address").html(location[0].address);
                $(".city").html(location[0].city);
                $(".phone").html(location[0].phone);
                $(".mail").html(location[0].email);
                drawMap(location[0].address+" "+location[0].city);
        },
        error: function(request,error)
        {
            alert(error);
            console.log("Error");
        }
    });
}

function drawMap(address){
  var myGeocoder = new google.maps.Geocoder();
  var myLatlng;
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('myMap'), mapOptions);

    //**** Geocode allows to translate an address into coordinates
  myGeocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);

        // Create a marker in the position founded by geocode function
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });

        // Create an infoview when mouse is over and close it when it's out
        var contentString = "<p><b> BIG GYM FITNESS CENTER</b> <p>";
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(marker, 'mouseover', function() {
            infowindow.open(map,marker);
        });

        google.maps.event.addListener(marker, 'mouseout', function() {
            infowindow.close();
        });

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });


}
