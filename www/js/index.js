//$(document).ready(function(){
//   $(".listenRow").click(function(){
//      $(this).addClass("blink");
//      $("#name").html();
//   });
//
//});

var myVar = setInterval(function () {changeAuthor()}, 7000);


var myArray=['.f1Row', '.f2Row', '.f3Row', '.f4Row', '.f6Row', '.f7Row', '.f8Row', '.f9Row'];
var nameArray=['Kenneth H. Cooper', 'Jim Rohn', 'John F. Kennedy', 'Lee Haney', 'Muhammad Ali','Usain Bolt','Dwayne Johnson','Denis Waitley'];

var jobArray=['Doctor and former Air Force Colonel',
             'American entrepreneur, author and motivational speaker',
             'American politician, 35th President of the United States',
             'American former IFBB professional bodybuilder',
             'American former professional boxer',
             'Jamaican sprinter',
             'Actor, producer, TV personality, and professional wrestler',
             'American motivational speaker and writer'
            ];
var imageArray=["http://hypermediabiggym.altervista.org/Index/Kenneth_H._Cooper.jpg",
               "http://hypermediabiggym.altervista.org/Index/Jim_Rohn.jpg", "http://hypermediabiggym.altervista.org/Index/John_F._Kennedy.jpg",                "http://hypermediabiggym.altervista.org/Index/Lee_Haney.jpg", 'http://hypermediabiggym.altervista.org/Index/Muhammad_Ali.jpg','http://hypermediabiggym.altervista.org/Index/Usain_Bolt1.jpg','http://hypermediabiggym.altervista.org/Index/Dwayne_Johnson.png','http://hypermediabiggym.altervista.org/Index/Denis_Waitley.jpg'
               ];

var count=0;
var first=true;

function changeAuthor() {

      if(first==true){
            $(".preTimer").css("display","none");
            $(".postTimer").css("display","block");
            first=false;
      }

      //removeAllClass();
      $(".f1Row").removeClass("blink");
      $(".f2Row").removeClass("blink");
      $(".f3Row").removeClass("blink");
      $(".f4Row").removeClass("blink");
      $(".f6Row").removeClass("blink");
      $(".f7Row").removeClass("blink");
      $(".f8Row").removeClass("blink");
      $(".f9Row").removeClass("blink");


      var myElement=myArray[count];
      var text=nameArray[count];
      var job=jobArray[count];

      $("#name").html(text);
      $(myElement).addClass("blink");
      $("#authorImage").attr("src", imageArray[count]);
      $("#job").html(job);

      console.log("setto "+myElement+ " a " +text);

      count++;
      if(count==8)
        count=0;

}


