import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import ChatList from "./ChatList";
import ChatSection from "./ChatSection";
import UserProfile from "./UserProfile";

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null); // Selected chat state
  const [activeSection, setActiveSection] = useState("Chat"); // Track active section: "Chat", "UserProfile", "Logout"
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Sidebar visibility for mobile
  const navigate = useNavigate(); // For navigation on Logout

  // Handles chat selection
  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  // Handles back to the chat list
  const handleBackToChatList = () => {
    setSelectedChat(null);
  };

  // Sidebar section change handler
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsSidebarVisible(false); // Close sidebar on mobile when a section is selected
    if (section === "Logout") navigate("/login"); // Navigate to Login if Logout is clicked
  };

  // Toggle sidebar visibility on mobile
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Close sidebar
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
        <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white shadow-md h-auto p-4">
          <Sidebar closeSidebar={closeSidebar} onSectionChange={handleSectionChange} />
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-full lg:w-20 bg-white shadow-md">
        <Sidebar onSectionChange={handleSectionChange} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row pt-16 lg:pt-0 lg:pl-15">
        {activeSection === "Chat" && (
          <>
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
                selectedChat
                  ? "fixed inset-0 z-20 bg-white lg:static lg:block"
                  : "hidden lg:block"
              } w-full lg:w-3/4 shadow-md overflow-y-auto`}
            >
              {selectedChat ? (
                <ChatSection
                  selectedChat={selectedChat}
                  onBack={handleBackToChatList}
                />
              ) : (
                <div className="p-4 hidden lg:block">Select a chat to start</div>
              )}
            </div>
          </>
        )}

        {/* UserProfile Section */}
        {activeSection === "UserProfile" && (
          <div className="flex-1 bg-white p-4">
            <UserProfile />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
