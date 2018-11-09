//Global variables
var catalogJSON = []; //Array of players. JSON format.

window.onload = function() {

    getCatalog(function callback(responseParsed) {        //Call to function
    catalogJSON = responseParsed;                         //Callback function sets catalogJSON variable
    console.log(catalogJSON);
    //loadCatalog();
  });
};

function getCatalog(callback) {
  
  $.ajax({
    type: "POST",
    url: "../../server/management.php",
    data: { option:"getCatalog" },
    cache: false,
    success: function(response) {
      responseParsed = JSON.parse(response);            //Convert String to JSON parsed Array
      callback(responseParsed.videos);                  //Calls the callback function and pass it the server response
    }
  });
}

