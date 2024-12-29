import React, { useState, useEffect } from "react";
import ChatDetails from "./ChatDetails";
import InputMessage from "./InputMessage";

const chatData = {
  data: {
    chat1: [
      { from: { type: "user1" }, msg: { message: "Hi, how can I help you?" } },
      {
        from: { type: "user2" },
        msg: {
          message:
            "Hi guys Ive got the O2 package and have really slow internet. A speed check online said i can get 3mbps but it seems more like 0.5 these days, just freezing and taking ages to open pages and open audio files for example. I have decided to switch to the UPC package which offers 10mbps but do you think i will get it?",
        },
      },
      {
        from: { type: "user1" },
        msg: { message: "Sure! I will definitely help you with your query..." },
      },
      { from: { type: "user2" }, msg: { message: "john.mayers@gmail.com" } },
    ],
    chat2: [
      { from: { type: "user1" }, msg: { message: "Hi, how can I help you?" } },
      {
        from: { type: "user2" },
        msg: {
          message:
            "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?",
        },
      },
      {
        from: { type: "user1" },
        msg: {
          message:
            "Sure! I will definitely help you with you query. Could you please confirm your email address?",
        },
      },
      { from: { type: "user2" }, msg: { message: "tony.stark@gmail.com" } },
    ],
  },
};

function ChatMessage({ selectedChatId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(chatData.data[selectedChatId] || []);
  }, [selectedChatId]);

  const handleSendMessage = (newMessage) => {
    const newMessageObject = {
      from: { type: "user2" },
      msg: { message: newMessage },
    };

    setMessages((prevMessages) => [...prevMessages, newMessageObject]);
  };

  return (
    <div className="flex-1 flex flex-col">
      <ChatDetails selectedChatId={selectedChatId} messages={messages} />
      <InputMessage onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatMessage;
