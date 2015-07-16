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

            if(tweet!=null){
                console.log("prova:" + tweet[0].user.screen_name);
                $("#username").html(tweet[0].user.screen_name);
                $("#imageTwitter").attr("src", tweet[0].user.profile_image_url);

                for(i=0; i<tweet.length; ++i)
                {
                    $(".tweetContainer").append('<p id="twitterText">' + tweet[i].text + '</p>' + '<p id="twitterData">'+ tweet[i].created_at.substring(0,20) +'</p>' +'<br>');
                }
            }
            else{
                $(".twitterApi").css("display", "none");
            }
        },
        error: function(request,error)
        {
            alert(error);
            console.log("Errortwitter");
        }
    });
}
