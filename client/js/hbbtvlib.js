function init() {
  document.onkeydown = eventHandler;
  try {
    var appMan = document.getElementById("oipfAppMan");
    var app = appMan.getOwnerApplication(document);
    app.show();
    setKeyset(0x1+0x2+0x4+0x8+0x10+0x20+0x100);
  
  } catch (error) {
    $("#log").append("Error: " + error);
  }
}



//El player no se si funciona o no

/*
function createPlayer (video_id) {
  try {
    if ($("#video").length) {
      $("#log").append("removing video object");
      $("#video").stop();
      video = document.getElementById("video");
      video.stop();
      document.body.removeChild(document.getElementById("video"));
    }
    video = document.createElement("object");
    video.id = "video";
    video.type = "video/mp4";
    video.style.position = "absolute";
    video.style.zIndex = 999;
    video.style.width = "640px";
    video.style.height = "300px";
    video.style.top = "35%";
    video.style.left = "23%";
    video.data="videos/Terror.mp4";
    $("#log").append(video.data);
    $('body').append(video);
    video.play();
    video.onPlayStateChange = function() {
      $("#log").append("state: " + video.playState);
    };
  } catch (e) {
    $("#log").append(e + " error creating player");
  }
}
*/