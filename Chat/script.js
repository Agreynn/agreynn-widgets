const chatMessages = document.getElementById("chat-messages");

const SETTINGS = {
  maxMessages: 6,
  messageDuration: 12000,
  preview: true
};

function addMessage(name, text) {
  if (!text) return;

  const message = document.createElement("div");
  message.className = "chat-message";

  const user = document.createElement("span");
  user.className = "chat-name";
  user.textContent = name || "Usuario";

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

  if (listener !== "message") return;

  const event = obj.detail.event;
  const data = event.data || event;

  const name =
    data.displayName ||
    data.nick ||
    data.username ||
    data.name ||
    "Usuario";

  const text =
    data.text ||
    data.message ||
    data.renderedText ||
    "";

  addMessage(name, text);
});

if (SETTINGS.preview) {
  addMessage("Agreynn", "Mensaje de prueba del chat.");
}