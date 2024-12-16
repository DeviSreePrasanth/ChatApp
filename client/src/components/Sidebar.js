import React, { useState } from "react";

const Sidebar = ({ closeSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:w-20 w-full bg-white shadow-md rounded-lg flex flex-col h-screen">
      <div className="p-4 flex items-center justify-between bg-black text-white font-bold text-lg">
        <span>User</span>
        {/* Close Button for Mobile */}
        {closeSidebar && (
          <button
            onClick={closeSidebar}
            className="lg:hidden text-2xl text-white"
          >
            &times; {/* Close Icon */}
          </button>
        )}
      </div>

      {/* Mobile sidebar menu */}
      {isOpen && (
        <div className="lg:hidden bg-white p-3">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center p-3">
              <span className="mr-4 text-2xl">🏠</span> Home
            </li>
            <li className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
              <span className="mr-4 text-2xl">💬</span> Messages
            </li>
            <li className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
              <span className="mr-4 text-2xl">🔔</span> Notifications
            </li>
            <li className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
              <span className="mr-4 text-2xl">⚙</span> Settings
            </li>
          </ul>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="lg:flex-1 mt-4">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
            <span className="mr-4 text-2xl">🏠 </span>
          </li>
          <li className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
            <span className="mr-4 text-2xl">💬</span>
          </li>
          <li className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
            <span className="mr-4 text-2xl">🔔</span>
          </li>
          <li className="flex items-center p-3 hover:bg-gray-200 cursor-pointer">
            <span className="mr-4 text-2xl">⚙</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
