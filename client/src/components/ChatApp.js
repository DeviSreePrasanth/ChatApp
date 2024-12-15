import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Sidebar Component
import ChatList from "./ChatList"; // ChatList Component
import ChatSection from "./ChatSection"; // ChatSection Component

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for Sidebar visibility on mobile

  // Handles chat selection
  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  // Handles the back action from the selected chat to the chat list
  const handleBackToChatList = () => {
    setSelectedChat(null);
  };

  // Toggles the sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Closes the sidebar
  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle Button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-20 bg-white shadow-md flex justify-between items-center px-4 py-2">
        <button onClick={toggleSidebar} className="text-2xl">
          &#9776; {/* Hamburger Menu Icon */}
        </button>
        <h1 className="text-xl font-semibold">Chat App</h1>
      </div>

      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white shadow-md h-auto p-4 transition-transform duration-300">
          <Sidebar closeSidebar={closeSidebar} />
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 z-10 w-full lg:w-20 bg-white shadow-md lg:static">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row pt-16 lg:pt-0 lg:pl-15">
        {/* Chat List */}
        <div
          className={`${
            selectedChat ? "hidden lg:block" : "block"
          } w-full lg:w-1/4 bg-white shadow-md overflow-y-auto`}
        >
          <ChatList onChatSelect={handleChatSelect} />
        </div>

        {/* Chat Section */}
        <div
          className={`${
            selectedChat ? "fixed inset-0 z-20 bg-white lg:static lg:block" : "hidden lg:block"
          } w-full lg:w-3/4 shadow-md overflow-y-auto`}
        >
          {selectedChat ? (
            <ChatSection selectedChat={selectedChat} onBack={handleBackToChatList} />
          ) : (
            <div className="p-4 hidden lg:block">Select a chat to start</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
