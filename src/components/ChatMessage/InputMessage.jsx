import React, { useState } from "react";

function InputMessage({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form
      className="p-6 border-t-2 border-customGray"
      onSubmit={handleSendMessage}
    >
      <div className="flex bg-customGray px-4 py-5 rounded-lg">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border-none outline-none bg-transparent rounded p-2"
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          className="ml-2 bg-customCyan text-white rounded px-4"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default InputMessage;
