import React from "react";
import ChatList from "./ChatList";

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

const users = [
  { id: "chat1", name: "John Mayers" },
  { id: "chat2", name: "Tony Stark" },
];

function ChatSidebar({ setSelectedChat }) {
  return (
    <div className="w-full min-w-[100%] border-r-2 border-customGray">
      <div className="h-16 bg-customCyan text-white flex items-center justify-start font-bold px-4">
        CHAT SESSIONS
      </div>
      <ChatList chatData={chatData} setSelectedChat={setSelectedChat} />
    </div>
  );
}

export default ChatSidebar;
