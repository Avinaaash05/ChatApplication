import React from "react";

const chatData = {
  contacts: {
    chat1: {
      name: "John Mayers",
      role: "Account Manager",
      img: "/images/rev7.jpg",
    },
    chat2: {
      name: "Tony Stark",
      role: "CEO",
      img: "./images/rev6.jpg",
    },
    chat3: {
      name: "Bessie Berry",
      role: "Test Engineer",
      img: "./images/rev3.jpg",
    },
    chat4: {
      name: "Gleb Kuznetsov",
      img: "./images/rev4.jpg",
      role: "Graphic Designer",
    },
    chat5: {
      name: "Andrey Prokopenko",
      img: "./images/rev5.jpg",
      role: "HR",
    },
  },
};

function ChatDetails({ selectedChatId, messages }) {
  const contact = chatData.contacts[selectedChatId] || {};

  return (
    <div className="flex-1 flex flex-col">
      {/* Account Info Section */}
      <div className="border-b-2 border-customGray">
        <div className="flex gap-4 px-10 py-3 items-center">
          <div className="relative">
            <img
              src={contact.img}
              alt={contact.name}
              className="h-16 w-16 rounded-full"
            />
            <div className="absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-gray-800">
              {contact.name}
            </span>
            <p className="text-xs font-light">{contact.role}</p>
          </div>
        </div>
      </div>

      {/* Chat Messages Section */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-8 flex flex-col gap-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[70%] py-2 px-3 m-1 ${
              msg.from.type === "user1"
                ? "bg-customGray self-start px-6 py-4 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl"
                : "bg-customCyan text-white self-end px-6 py-4 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl"
            }`}
          >
            <p className="text-xs">{msg.msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatDetails;
