// When the mouse is over a landmark, it will be opened without any click
$('.nav li').hover(function(){
    $('.dropdown-toggle',this).trigger('click');
});

//$('.dropdown-menu li').hover(function(){
//    $(
//});


// Google Maps config
$(document).ready(loadGoogleMaps);
function loadGoogleMaps(){
    var mapCanvas = document.getElementById('myMap');
    var mapOptions = {
        center: new google.maps.LatLng(25.5403, -80.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
};
    google.maps.event.addDomListener(window, 'load', initialize);
