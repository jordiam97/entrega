var app;

function init() {
  document.onkeydown = eventHandler;
  try {
    var appMan = document.getElementById("oipfAppMan");
    app = appMan.getOwnerApplication(document);
    app.show();
    setKeyset(0x1 + 0x2 + 0x4 + 0x8 + 0x10 + 0x20 + 0x100);

  } catch (error) {
    $("#log").append("Error: " + error);
  }
}

function destroyApp() {
  app.destroyApplication();
}

function createVideoPlayer(url) {
  if (document.getElementsByTagName("video").length) {
    document.getElementById("video-container").innerHTML = "";
  }

  var player, source;

  player = document.createElement("video");
  player.width = 330;
  player.height = 190;
  player.id = "video";
  source = document.createElement("source");
  source.src = url;
  source.type = "video/mp4";
  player.appendChild(source);

  player.autoplay = true;

  document.getElementById("video-container").appendChild(player);
}
function getPlayer() {
  object = document.getElementsByTagName("video")[0];
  return object;
}
