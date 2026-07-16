const messageElement =
  document.getElementById("scene-message");

const messages = [
  "La niebla guarda este lugar.",
  "El bosque permanece en silencio.",
  "El cuervo volverá en unos momentos.",
  "La sombra regresará pronto."
];

let currentMessage = 0;

function changeMessage() {
  messageElement.classList.add("fade");

  setTimeout(() => {
    currentMessage =
      (currentMessage + 1) % messages.length;

    messageElement.textContent =
      messages[currentMessage];

    messageElement.classList.remove("fade");
  }, 800);
}

setInterval(changeMessage, 9000);