//Global variables
var catalogJSON = []; //Array of players. JSON format.

window.onload = function() {

    init();                                               //For the app manager (ara des d'aquí)

    getCatalog(function callback(responseParsed) {        //Call to function
    catalogJSON = responseParsed;                         //Callback function sets catalogJSON variable
    loadCatalog();
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

function loadCatalog() {
    for (i = 0; i <catalogJSON.length; i++) {            
        
        //Row
        var row = $("<li></li>");
        row.addClass("list-group-item");
        row.addClass("list-group-item-action");
        row.addClass("d-flex");

        //Image
        var image = $("<img></img>");
        image.attr("src", "../../server/" + catalogJSON[i].thumbnail_url);
        image.attr('width', 150);
        image.addClass("img-thumbnail");
        
        //Name
        var name = $("<div></div>");
        name.addClass("p-2");
        name.addClass("font-weight-bold");
        name.text(catalogJSON[i].name);

        //Year
        var year = $("<div></div>");
        year.addClass("p-2");
        year.text(catalogJSON[i].id);

        //Views
        var v = $("<div></div>");
        v.addClass("p-2");
        name.addClass("font-weight-light");
        v.text(catalogJSON[i].views.toString() + " views");
        
        row.append(image);
        row.append(year);
        row.append(name);
        row.append(v);
        $("#content-list").append(row);
      }
}

