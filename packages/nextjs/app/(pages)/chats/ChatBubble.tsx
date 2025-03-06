import React from "react";

const ChatBubble = () => {
  return (
    <div>
      {dummyChat.map(chat => (
        <div key={chat.id} className={`chat ${chat.type === "receiver" ? "chat-start" : "chat-end"}`}>
          {/* receiver avatar */}
          {chat.type === "receiver" && (
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={chat.avatar} />
              </div>
            </div>
          )}

          {/* message time */}
          <div className="chat-header">
            {chat.username}
            <time className="text-xs ml-1 opacity-50">{chat.time}</time>
          </div>

          {/* message */}
          <div className="chat-bubble">{chat.message}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBubble;

const dummyChat = [
  {
    id: 1,
    type: "receiver",
    username: "UserName",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
    message: "Ni Bu Pei Dang Zhu Bo!",
    time: "12:45",
  },
  {
    id: 2,
    type: "receiver",
    username: "UserName",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
    message: "Wo Yao Qu Guan NI",
    time: "12:45",
  },
  {
    id: 3,
    type: "sender",
    username: "Anakin",
    avatar: "",
    message: "Niubi",
    time: "12:46",
  },
];
