import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="chatbox">
      {messages.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask your career question"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}