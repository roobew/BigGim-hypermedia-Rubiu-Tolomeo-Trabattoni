// When the mouse is over a landmark, it will be opened without any click
$('.nav li').hover(function(){
    $('.dropdown-toggle',this).trigger('click');});

//$('.dropdown-menu li').hover(function(){
//    $(
//});
