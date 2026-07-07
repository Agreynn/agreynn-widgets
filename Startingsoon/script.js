const message = document.getElementById("scene-message");

const messages = [
  "La niebla se alza...",
  "Los cuervos regresan...",
  "El bosque despierta...",
  "El viaje comenzará pronto..."
];

let index = 0;

setInterval(() => {
  message.classList.add("fade");

  setTimeout(() => {
    index = (index + 1) % messages.length;
    message.textContent = messages[index];
    message.classList.remove("fade");
  }, 800);
}, 9000);