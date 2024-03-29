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
  try {
    var appMan = document.getElementById("oipfAppMan");
    app = appMan.getOwnerApplication(document);
    app.destroyApplication();
  } catch (error) {
    $("#log").append("Error: " + error);
  }
}

function createVideoPlayer(url, fullscreen, broadcast) {

  if (document.getElementsByTagName("video").length) {
    document.getElementsByTagName("video")[0].parentNode.removeChild(document.getElementsByTagName("video")[0]);
  }

  var player, source;

  player = document.createElement("video");
  player.id = "video";
  player.style.zIndex = 99;
  source = document.createElement("source");
  source.src = url;
  if (broadcast) {
    source.src = "http://ccma-tva-int-abertis-live.hls.adaptive.level3.net/int/ngrp:tv3_web/playlist.m3u8"
    source.type = "video/broadcast";
  } else {
    source.type = "video/mp4";
  }
  player.appendChild(source);

  if (fullscreen) {
    player.width = 1280;
    player.height = 720;
    player.style.zIndex = 100;
    player.style.position = "absolute";
    player.style.top = 0;
    player.style.left = 0;

    player.autoplay = true;

    document.body.appendChild(player);
  } else {
    player.width = 330;
    player.height = 190;
    player.style.zIndex = 10;
    //player.style.position = "relative";
    player.style.position = "absolute";
    player.style.top = "20px";
    player.style.left = "15px";

    player.autoplay = true;

    document.getElementById("video-container").appendChild(player);
  }

  player.addEventListener('canplay', function() {
    this.currentTime = time;
  });
}

function getPlayer() {
  object = document.getElementsByTagName("video")[0];
  return object;
}
