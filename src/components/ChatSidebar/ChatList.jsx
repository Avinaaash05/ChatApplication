import React, { useState } from "react";

function ChatList({ chatData, setSelectedChat }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDesignations, setSelectedDesignations] = useState([]); // Array to hold selected designations
  const [showFilterOptions, setShowFilterOptions] = useState(false); // State to toggle filter options

  const chatProfiles = [
    {
      id: "chat1",
      name: "John Mayers",
      img: "./images/rev7.jpg",
      designation: "UI Developer",
    },
    {
      id: "chat2",
      name: "Tony Stark",
      img: "./images/rev6.jpg",
      designation: "Product Designer",
    },
    {
      id: "chat3",
      name: "Bessie Berry",
      img: "./images/rev3.jpg",
      designation: "Test Engineer",
    },
    {
      id: "chat4",
      name: "Gleb Kuznetsov",
      img: "./images/rev4.jpg",
      designation: "Graphic Designer",
    },
    {
      id: "chat5",
      name: "Andrey Prokopenko",
      img: "./images/rev5.jpg",
      designation: "HR",
    },
    {
      id: "chat6",
      name: "Nick Herasimenka",
      img: "./images/rev6.jpg",
      designation: "UI Developer",
    },
    {
      id: "chat7",
      name: "Valentin Salmon",
      img: "./images/rev7.jpg",
      designation: "Product Designer",
    },
    {
      id: "chat8",
      name: "Miro Kirov",
      img: "./images/rev1.jpg",
      designation: "Test Engineer",
    },
  ];

  const filteredChats = chatProfiles.filter((chat) => {
    const matchesSearchTerm = chat.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDesignation =
      selectedDesignations.length > 0
        ? selectedDesignations.includes(chat.designation)
        : true;
    return matchesSearchTerm && matchesDesignation;
  });

  const toggleFilterOptions = () => {
    setShowFilterOptions((prev) => !prev);
  };

  const handleCheckboxChange = (designation) => {
    setSelectedDesignations((prev) =>
      prev.includes(designation)
        ? prev.filter((d) => d !== designation)
        : [...prev, designation]
    );
  };

  return (
    <div className="flex-1 overflow-y-hidden h-full">
      {/* Search Bar */}
      <div className="flex items-center px-2 py-2 border-b-2 border-customGray">
        <div className="flex flex-1 items-center gap-4 border border-gray-200 px-4 py-2 mx-2 my-1 rounded-md">
          <i className="fa-solid fa-magnifying-glass text-gray-500 text-xl"></i>
          <input
            type="text"
            placeholder="Search here"
            className="flex-1 border-none outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <i
          className="fa-solid fa-filter text-customCyan text-2xl px-2 cursor-pointer"
          onClick={toggleFilterOptions} // Toggle filter options on click
        ></i>
      </div>

      {/* Filter Options */}
      {showFilterOptions && (
        <div className="absolute bg-white border border-gray-200 rounded-md shadow-md mt-2 p-2 w-48 left-64 top-28">
          {" "}
          {/* Positioned below the filter icon */}
          <div className="flex flex-col">
            {[
              "UI Developer",
              "Product Designer",
              "Test Engineer",
              "Graphic Designer",
              "HR",
            ].map((designation) => (
              <div
                key={designation}
                className="flex items-center text-xs border-b-2 border-customGray px-2 py-2 "
              >
                <input
                  type="checkbox"
                  id={designation}
                  checked={selectedDesignations.includes(designation)}
                  onChange={() => handleCheckboxChange(designation)}
                  className="form-checkbox text-customCyan" // Custom styling for checkbox
                />
                <label htmlFor={designation} className="ml-2 cursor-pointer">
                  {designation}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chat List */}
      <div className="overflow-y-auto hide-scrollbar h-[calc(100vh-64px)]">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center gap-2 p-4 hover:bg-gray-100 cursor-pointer border-b-2 border-customGray"
              onClick={() => setSelectedChat(chat.id)}
            >
              <img
                src={chat.img}
                alt={chat.name}
                className="h-12 w-12 rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-bold text-gray-700">{chat.name}</span>
                <p className="text-gray-600 text-xs">
                  Lorem ipsum dolor sit amet consectetur....
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">No results found</p>
        )}
      </div>
    </div>
  );
}

export default ChatList;
