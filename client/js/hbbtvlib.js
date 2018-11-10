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
  var player, source;

  player = document.createElement("video");
  player.width = 330;
  player.height = 190;
  source = document.createElement("source");
  source.src = url;
  source.type = "video/mp4";
  player.appendChild(source);

  player.autoplay = true;

  document.getElementById("video-container").appendChild(player);
=======
			player.setFullScreen(true);
			player.play(1);
		}

/**
 * HTML5 video tag can be used only in HbbTV 2.0 profile
 * @param url
 */
function createVideoPlayer(url) {
	var player, source;

	player = document.createElement("video");
	source = document.createElement("source");
	source.src = url;
	source.type = "video/mp4";
	player.appendChild(source);

	player.autoplay = true;

	document.body.getElementById("video-container").appendChild(player);
}


//El player no se si funciona o no

function createPlayer (video_id) {
  var parsedURL;

  if (parsedURL.type === "html5" && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf("HbbTV/")+8, navigator.userAgent.indexOf(" ", navigator.userAgent.indexOf("HbbTV/")))) >= 3.1) {
    createVideoPlayer(parsedURL.url);
  } else {
    createAVPlayer(parsedURL.url);
  }

  controls.initialize();
}
