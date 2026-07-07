const message = document.getElementById("scene-message");

const messages = [
  "El bosque vuelve al silencio...",
  "Los cuervos descansan...",
  "La niebla cubre el camino...",
  "Hasta la próxima aventura..."
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