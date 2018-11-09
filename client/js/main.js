/*

window.onload = function(){

    //document.onkeydown = eventHandler;
  
    try {
      //should be called show() function, if not the application will not be shown;
      var app = document.getElementById('appmgr').getOwnerApplication(document);
      app.show();
      setKeyset(0x1+0x2+0x4+0x8+0x10+0x20+0x100);
    } catch (e) {
        $("#log").append("Error: " + e);
    }
  
    //createPlayer(1);
  };

  */