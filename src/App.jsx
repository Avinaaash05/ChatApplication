import React, { useState, useEffect } from "react";
import ChatSidebar from "./components/ChatSidebar/ChatSidebar";
import ChatMessage from "./components/ChatMessage/ChatMessage";

function App() {
  const [selectedChatId, setSelectedChatId] = useState(null); //
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleCloseChat = () => {
    setSelectedChatId(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col md:flex-row ">
      <div
        className={`flex-none md:w-1/3 ${
          selectedChatId ? "hidden md:block" : "block"
        } 
          ${
            window.innerWidth < 1000 && window.innerWidth > 768
              ? "w-[300px]"
              : ""
          }`}
      >
        <ChatSidebar setSelectedChat={setSelectedChatId} />
      </div>

      {/* Chat messages area  */}
      <div
        className={`flex-1 flex flex-col ${
          selectedChatId ? "w-full" : "md:w-2/3"
        }`}
      >
        {selectedChatId ? (
          <>
            <div className="h-16 bg-customCyan text-white flex items-center justify-between px-4 text-lg">
              <span className="font-bold text-md">CHAT DETAILS</span>
              <i
                className="fa-solid fa-xmark cursor-pointer"
                onClick={handleCloseChat}
                title="Close Chat"
              ></i>
            </div>
            <ChatMessage selectedChatId={selectedChatId} />
          </>
        ) : (
          // Removing the message when screen size is less than 768px
          !isMobile && (
            <div
              className={`flex-1 flex justify-center items-center bg-customCyan bg-opacity-20`}
            >
              <span className="font-bold text-gray-500 text-4xl">
                Select a Chat to View the Conversation
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
