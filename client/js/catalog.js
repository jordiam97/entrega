//Global variables
var catalogJSON = []; //Array of players. JSON format.
var usersNumber = 3;

window.onload = function() {

    init();                                               //For the app manager

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
        if (i == 0) {
          row.addClass("active");
        }
        row.addClass("d-flex");
        row.attr('id', "row" + i);

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

        //Nav
        var nav = $("<img></img>");
        nav.attr("src", "../rec/navegation.png");
        nav.css({height:"70px", margin: "10px"});
        nav.addClass("img-thumbnail");
        nav.attr('id', "nav" + i);
        
        row.append(nav);
        row.append(image);
        row.append(year);
        row.append(name);
        row.append(v);
        $("#content-list").append(row);

        if (i != 0) {
          $("#nav" + i).hide();
        }
    }

    //Focus to the catalog first
    $("#content-list").focus();

    //Fill first row info
    $("#info-music").text("Music: " + catalogJSON[0].music);
    $("#info-author").text("Author: " + catalogJSON[0].author);
    $("#info-views").text("Views: " + catalogJSON[0].views);
}

