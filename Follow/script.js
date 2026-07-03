const SETTINGS = {
  duration: 6000,
  previewName: "Agreynn",
  preview: false
};

const followSound = new Audio(
  "https://agreynn.github.io/agreynn-widgets/Follow/assets/audio/follow.mp3"
);

followSound.volume = 0.45;

const alertBox = document.getElementById("agreynn-alert");
const username = document.getElementById("username");

let hideTimer;

function playSound() {
  followSound.pause();
  followSound.currentTime = 0;
  followSound.play().catch(() => {});
}

function showAlert(name) {
  clearTimeout(hideTimer);

  username.textContent = name || "nuevo seguidor";

  playSound();

  alertBox.classList.remove("hide");
  alertBox.classList.remove("show");

  void alertBox.offsetWidth;

  alertBox.classList.add("show");

  hideTimer = setTimeout(() => {
    hideAlert();
  }, SETTINGS.duration);
}

function hideAlert() {
  alertBox.classList.remove("show");
  alertBox.classList.add("hide");
}

if (SETTINGS.preview) {
  window.onload = () => {
    showAlert(SETTINGS.previewName);
  };
}

window.addEventListener("onEventReceived", function (obj) {
  const listener = obj.detail.listener;
  const event = obj.detail.event;

  if (listener !== "follower-latest") return;

  showAlert(event.name);
});