import { useState } from "react";
import "./ChatBot.css";
const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, role: "You", text: "Hallo" },
    {
      id: 2,
      role: "Bot",
      text: "Hallo!, wie kann ich dir heute helfen",
    },
  ]);

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "You",
      text: input,
    };

    const botMessage = {
      id: Date.now() + 1,
      role: "Bot",
      text: "ich bin einfach bot",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setInput("");
  }

  return (
    <div className="ChatBot">
      <h3>ChatBot</h3>
      <div>
        {messages.map((msg) => (
          <p
            style={{ textAlign: msg.role === "You" ? "right" : "left" }}
            key={msg.id}
          >
            {msg.role === "You" ? (
              <div>
                {" "}
                <strong>:{msg.role}</strong> <p>{msg.text} </p>{" "}
              </div>
            ) : (
              <div>
                {" "}
                <strong>{msg.role}:</strong> <p>{msg.text} </p>{" "}
              </div>
            )}
          </p>
        ))}
      </div>
      <div className="textInput">
        <input
          type="text"
          placeholder="Schreibe eine Nachricht..."
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
