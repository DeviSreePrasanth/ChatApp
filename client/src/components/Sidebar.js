import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ closeSidebar, onSectionChange }) => {
  const navigate = useNavigate();

  // Navigate to Profile page when "Profile" section is clicked
  const handleProfileClick = () => {
    onSectionChange("Profile");
    navigate("/profile");
    if (closeSidebar) closeSidebar(); // Close sidebar after clicking
  };

  // Handle other section clicks
  const handleChatClick = () => {
    onSectionChange("Chat");
    navigate("/chat"); // Navigate to Chat page
    if (closeSidebar) closeSidebar();
  };

  const handleLogoutClick = () => {
    onSectionChange("Logout");
    alert("Logging out...");
    // Add your logout functionality here
    if (closeSidebar) closeSidebar();
  };

  return (
    <div className="flex flex-col h-screen bg-white shadow-md lg:w-20">
      <div className="p-4 bg-black text-white font-bold text-lg flex items-center justify-between">
        <span>User</span>
        {closeSidebar && (
          <button
            onClick={closeSidebar}
            className="lg:hidden text-2xl text-white"
          >
            &times;
          </button>
        )}
      </div>

      {/* Sidebar Menu */}
      <ul className="flex-1 mt-4 space-y-3 text-gray-700">
        <li
          className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
          onClick={handleChatClick}
        >
          <span className="mr-4 text-2xl">💬</span> 
        </li>
        <li
          className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
          onClick={handleProfileClick}
        >
          <span className="mr-4 text-2xl">👤</span> 
        </li>
        <li
          className="flex items-center p-3 cursor-pointer hover:bg-gray-200"
          onClick={handleLogoutClick}
        >
          <span className="mr-4 text-2xl">🚪</span> 
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
