import React from "react";

const Chatlist = ({ onChatSelect }) => {
  const chats = [
    { id: 1, name: "Friends Forever", lastMessage: "Hahahaha!", time: "Today, 9:52pm" },
    { id: 2, name: "Mera Gang", lastMessage: "Kyuuuuu???", time: "Yesterday, 12:31pm" },
    { id: 3, name: "Anil", lastMessage: "April fool's day", time: "Today, 9:52pm" },
  ];

  return (
    <div className="p-4 space-y-4">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100"
          onClick={() => onChatSelect(chat)}
        >
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
              {chat.name[0]}
            </div>
            <div className="ml-3">
              <p className="text-gray-800 font-semibold">{chat.name}</p>
              <p className="text-gray-500 text-sm">{chat.lastMessage}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">{chat.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Chatlist;