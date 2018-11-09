/*
 * To use This library, You need to add the OIPF application manager objects to your HTML page,
 *
 *	<object id="oipfAppMan" type="application/oipfApplicationManager"></object>
 */

function hbbtvlib_red_initialize(){
  //should be called show() function, if not the application will not be shown;
  var appManager = document.getElementById("oipfAppMan").getOwnerApplication(document);
  appManager.show();

  // IMPORTANT!!: only RED button should be accepted.
  appManager.privateData.keyset.setValue(0x1);
}

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
