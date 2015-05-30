$(document).ready(ready);

function ready() {
    console.log("I'm ready!");
    var id=0;

 $.ajax({

        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://hypermediabiggym.altervista.org/tmp.php", //Relative or absolute path to file.php file
        data: {dato:id},
        success: function(response) {
            console.log(JSON.parse(response));

            var inst=JSON.parse(response);
            var el="";
            for(var i=0;i<inst.length;i++){
                console.log(inst[i].title);

                el+=inst[i].id+" <b>"+inst[i].name+"</b>, "+inst[i].surname+"<br>";
            }

            $(".prova").html(el);
        },
        error: function(request,error)
        {
            alert(error);
            console.log("Error");
        }
    });
}
