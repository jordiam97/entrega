KEY_UP = 38;
KEY_DOWN = 40;
KEY_LEFT = 37;
KEY_RIGHT = 39;
KEY_RED = 403; //R
KEY_GREEN = 404; //G
KEY_YELLOW = 405; //Y
KEY_BLUE = 406; //B
KEY_OK = 13; //Enter
KEY_BACK = 461; //Borrar
KEY_0 = 48; //0

var row = 0;  //active row in catalog


function setKeyset(mask) {
  try {
    var elemcfg = document.getElementById("oipfcfg");
    elemcfg.keyset.value = mask;
  } catch (e) {}
  try {
    var elemcfg = document.getElementById("oipfcfg");
    elemcfg.keyset.setValue(mask);
  } catch (e) {}
  try {
    var app = document
      .getElementById("oipfAppManr")
      .getOwnerApplication(document);
    app.privateData.keyset.setValue(mask);
    app.privateData.keyset.value = mask;
  } catch (e) {}
}

// Switch per realitzar accions al premer una tecla determinada
function eventHandler(e) {
  switch (e.keyCode) {
    
    case KEY_RIGHT:
      if (window.location.pathname == "/client/html/catalog.xhtml") {
        manageCatalogFocus("right");
      }
      break;

    case KEY_LEFT:
      if (window.location.pathname == "/client/html/catalog.xhtml") { 
        manageCatalogFocus("left");
      } 
      break;

    case KEY_UP:
      var contentList = document.getElementById("content-list");//si el focus esta en aquesta zona
      if (window.location.pathname == "/client/html/catalog.xhtml" && document.activeElement === contentList) {
        if (row > 0) {
          row--;
        }
        manageCatalogRow();
      }
      break;
    
    case KEY_DOWN:  
      var contentList = document.getElementById("content-list");//si el focus esta en aquesta zona
      if (window.location.pathname == "/client/html/catalog.xhtml" && document.activeElement === contentList) {
        if (row < catalogJSON.length-1) {
          row++;
        }
        manageCatalogRow();
      }
      break;
    
    case KEY_GREEN:
      $("#log").append("GREEN");
      break;
    
    case KEY_BLUE:
      $("#log").append("BLUE");
      break;
    
    case KEY_RED:
      manageWelcomePage("red");
      $("#log").append("RED");
      break;
    
    case KEY_YELLOW:
      $("#log").append("YELLOW");
      break;
    
    case KEY_OK:
      manageSyncPage("ok");
      $("#log").append("OK");
      break;

    case KEY_BACK:
      $("#log").append("BACK");
      manageSyncPage("back");
      manageCatalogPage("back");
      break;

    case KEY_0:
      $("#log").append("destroy app");
      destroyApp();
      break;
    
    default:
      break;
  }
}

function manageWelcomePage(key) {
  if (key == "red" && window.location.pathname == "/client/index.xhtml") {
    //Go to sync page
    window.location.href = "/client/html/sync.xhtml";
  }
}

function manageSyncPage(key) {
  if (key == "ok" && window.location.pathname == "/client/html/sync.xhtml") {
    //Go to catalog page
    window.location.href = "/client/html/catalog.xhtml";
  }
  if (key == "back" && window.location.pathname == "/client/html/sync.xhtml") {
    //Go back to welcome page
    window.location.href = "/client/index.xhtml";
  }
}

function manageCatalogPage(key) {
  if (
    key == "back" &&
    window.location.pathname == "/client/html/catalog.xhtml"
  ) {
    //Go back to sync page
    window.location.href = "/client/html/sync.xhtml";
  }
}

function manageCatalogRow() {

  var contentList = document.getElementById("content-list");
  if (window.location.pathname == "/client/html/catalog.xhtml" && document.activeElement === contentList) {
    for (i = 0; i<catalogJSON.length; i++) {
      $("#row" + i).removeClass("active");
      $("#nav"+i).hide();
    }
    //fill data with current row
    $("#row" + row).addClass("active");
    $("#nav"+ row).show();
    $("#info-music").text("Music: " + catalogJSON[row].music);
    $("#info-author").text("Author: " + catalogJSON[row].author);
    $("#info-views").text("Views: " + catalogJSON[row].views);
  }
}

function manageCatalogFocus(direction) {
  if (direction == "left") {
    $("#content-list").focus(); //focus to the content list
    $("#users").removeClass("active");
    $("#info").removeClass("active");

  }else {
    //give focus to connected users list or to info list
    var contentList = document.getElementById("content-list");
    // check for focus of content list
    if (document.activeElement === contentList) {
      //content list is focused --> focus to users list
      $("#users-list").focus();
      $("#info").removeClass("active");
      $("#users").addClass("active");

    }else {
      //users list is focused --> focus to info list
      $("#info-list").focus();
      $("#info").addClass("active");
      $("#users").removeClass("active");
    }
  }
}









//Aixo de abaix no se que es

/*

if (typeof(VK_LEFT) == 'undefined') {
  var VK_LEFT = 0x25;
  var VK_UP = 0x26;
  var VK_RIGHT = 0x27;
  var VK_DOWN = 0x28;
}
if (typeof(VK_ENTER) == 'undefined') {
  var VK_ENTER = 0x0d;
}
if (typeof(VK_RED) == 'undefined') {
  var VK_RED = 0x52;
  var VK_GREEN = 0x56;
  var VK_YELLOW = 0x4A;
  var VK_BLUE = 0x42;
}
if (typeof(VK_PLAY) == 'undefined') {
  var VK_PLAY = 0x50;
  var VK_PAUSE = 0x51;
  var VK_STOP = 0x53;
}
if (typeof(VK_FAST_FWD) == 'undefined') {
  var VK_FAST_FWD = 0x46;
  var VK_REWIND = 0x52;
}
if (typeof(VK_BACK) == 'undefined') {
  var VK_BACK = 0xa6;
}
if (typeof(VK_0) == 'undefined') {
  var VK_0 = 0x30;
  var VK_1 = 0x31;
  var VK_2 = 0x32;
  var VK_3 = 0x33;
  var VK_4 = 0x34;
  var VK_5 = 0x35;
  var VK_6 = 0x36;
  var VK_7 = 0x37;
  var VK_8 = 0x38;
  var VK_9 = 0x39;
}


*/
