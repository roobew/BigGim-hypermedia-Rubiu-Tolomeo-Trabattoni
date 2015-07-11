function parseGetVars()
{
  // creo una array
  var args = new Array();
  // individuo la query (cioè tutto quello che sta a destra del ?)
  // per farlo uso il metodo substring della proprietà search
  // dell'oggetto location
  var query = window.location.search.substring(1);
  // se c'è una querystring procedo alla sua analisi
  if (query)
  {
    // divido la querystring in blocchi sulla base del carattere &
    // (il carattere & è usato per concatenare i diversi parametri della URL)
    var strList = query.split('&');
    // faccio un ciclo per leggere i blocchi individuati nella querystring
    for(str in strList)
    {
      // divido ogni blocco mediante il simbolo uguale
      // (uguale è usato per l'assegnazione del valore)
      var parts = strList[str].split('=');
      // inserisco nella array args l'accoppiata nome = valore di ciascun
      // parametro presente nella querystring
      args[unescape(parts[0])] = unescape(parts[1]);
    }
  }
  return args;
}

$(document).ready(getData);

function getData(){
    var get = parseGetVars();
    var idCategory=get['idCat'];

    //alert(idCategory);
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://hypermediabiggym.altervista.org/CourseCategory/getCourseCategory.php",

        data: { 'id' : idCategory},
        success: function(response) {
                console.log(response);
                var category=JSON.parse(response);
                //alert(category[0]);
                $(".nameCategory").html(category[0].name);
                $(".whatIsIt").html(category[0].description);
                $(".benefitsAndSubjects").html(category[0].benefit);
                $("#myImage").attr("src" , category[0].img);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}
