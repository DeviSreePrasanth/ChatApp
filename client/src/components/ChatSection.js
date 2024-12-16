import React from "react";

const ChatSection = ({ selectedChat, onBack }) => {
  if (!selectedChat) return <div className="flex-1 p-4">Select a chat to start</div>;

  return (
    <div className="flex-1 bg-white shadow-md rounded-lg flex flex-col h-screen">
      {/* Back Button for Mobile */}
      <div className="p-4 border-b border-gray-300 flex items-center">
        <button className="text-blue-500" onClick={onBack}>{"< Back to Chat List"}</button>
      </div>

      {/* Chat Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
            {selectedChat.name[0]}
          </div>
          <div className="ml-3">
            <p className="text-gray-800 font-semibold">{selectedChat.name}</p>
            <p className="text-gray-500 text-sm">Online - Last seen, 2.02pm</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-500">
          <span>📞</span>
          <span>📹</span>
          <span>⋮</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="flex items-start">
          <div className="bg-gray-200 p-3 rounded-lg max-w-md">Hey There!</div>
        </div>
        <div className="flex items-start">
          <div className="bg-gray-200 p-3 rounded-lg max-w-md">How are you?</div>
        </div>
        <div className="flex items-end justify-end">
          <div className="bg-black text-white p-3 rounded-lg max-w-md">Hello!</div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-gray-300 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type your message here..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button className="p-2 bg-gray-300 rounded-full">🎤</button>
      </div>
    </div>
  );
};

export default ChatSection;