var docReady = function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    setTimeout(fn, 1);
  }
};

var videoControllerInit = function videoControllerInit() {
  var videoContainer = document.querySelectorAll(
    "[data-video-player-container]"
  );
  if (videoContainer) {
    videoContainer.forEach(function (container) {
      var videoPlayer = container.querySelector("[data-video-player");
      var playButton = container.querySelector("[data-play-button]");
      var videoPlayed = function videoPlayed() {
        container.classList.toggle("video-player-paused");
        container.classList.toggle("video-player-play");
      };
      var videoPaused = function videoPaused() {
        container.classList.toggle("video-player-play");
        container.classList.toggle("video-player-paused");
      };
      playButton.addEventListener("click", function () {
        if (videoPlayer.paused) {
          videoPlayer.play();
          videoPaused();
        } else {
          videoPlayer.pause();
          videoPlayed();
        }
      });
      videoPlayer.addEventListener("ended", videoPaused);
    });
  }
};

docReady(videoControllerInit);
