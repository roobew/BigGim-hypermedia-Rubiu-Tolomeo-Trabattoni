$(document).ready(ready);



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

function ready() {

    console.log("I'm ready! twitter");
    var idIns =  getUrlParameters("idIns", "", true);

    $.ajax({
        method:"POST",
        crossDomain: true,
        url: "http://hypermediabiggym.altervista.org/Instructor/twitter.php",
    data: { 'dato' : idIns}, //BISOGNA PASSARE IL NOME SU TWITTER DELL'ISTRUTTORE (esempio: byggymjalen)
        success: function(response) {
            console.log("inside");
            console.log(JSON.parse(response));
            var tweet = JSON.parse(response);
            for(i=0; i<tweet.length; ++i)
            {
                $(".twitterApi").append('<p>' + tweet[i].text + '</p>');
            }
            //$(".twitterapi").
            //$(".emptyDiv").html(tweet[0].id);
        },
        error: function(request,error)
        {
            alert(error);
            console.log("Errortwitter");
        }
    });
}
