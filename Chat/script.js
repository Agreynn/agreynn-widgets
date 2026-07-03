const chatMessages = document.getElementById("chat-messages");

const SETTINGS = {
  maxMessages: 6,
  messageDuration: 16000,
  preview: true
};

function addMessage(name, text) {
  const message = document.createElement("div");
  message.className = "chat-message";

  const user = document.createElement("span");
  user.className = "chat-name";
  user.textContent = name;

  const content = document.createElement("span");
  content.className = "chat-text";
  content.textContent = text;

  message.appendChild(user);
  message.appendChild(content);
  chatMessages.appendChild(message);

  const messages = chatMessages.querySelectorAll(".chat-message");

  if (messages.length > SETTINGS.maxMessages) {
    messages[0].remove();
  }

  setTimeout(() => {
    message.style.animation = "messageOut .45s ease forwards";

    setTimeout(() => {
      message.remove();
    }, 450);
  }, SETTINGS.messageDuration);
}

window.addEventListener("onEventReceived", function (obj) {
  const listener = obj.detail.listener;
  const event = obj.detail.event;

  if (listener !== "message") return;

  addMessage(event.displayName || event.nick || "Usuario", event.text || "");
});

if (SETTINGS.preview) {
  addMessage("Agreynn", "La niebla se alza...");
  addMessage("Cuervo", "El bosque vuelve al silencio.");
}