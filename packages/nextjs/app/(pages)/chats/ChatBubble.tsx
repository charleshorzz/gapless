"use client";

import React, { useEffect, useRef, useState } from "react";
import { useChatStore } from "~~/app/store";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const ChatBubble = () => {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { selectedChat, chatWith } = useChatStore();
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: "receiver",
      username: "UserName",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
      message: "Ni Bu Pei Dang Zhu Bo!",
      time: "12:45",
    },
  ]);

  // useEffect for autos crolling
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleSend = () => {
    if (message.trim() !== "") {
      // UI Optimistic
      const newMessage = {
        id: Date.now(),
        type: "sender",
        username: "You",
        avatar: "",
        message: message.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setChatHistory(prev => [...prev, newMessage]);
      setMessage("");

      // Fetch API here
      // fetch('/api/send-message', { method: 'POST', body: ... })
    }
  };

  return (
    <>
      {/* The max height and overflow logic need to be solve further */}
      <div className="flex-grow overflow-y-auto max-h-[75vh]">
        {/* list.ipfsHash.map... */}
        {chatHistory.map(chat => (
          <div
            key={chat.id}
            className={`chat ${chat.type === "receiver" ? "chat-start" : "chat-end"}`}
            ref={messagesEndRef}
          >
            {/* Avater - Receiver */}
            {chat.type === "receiver" && (
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <BlockieAvatar address={chatWith} size={24} />
                </div>
              </div>
            )}

            {/* Chat Header */}
            <div className="chat-header">
              {chat.username}
              <time className="text-xs ml-1 opacity-50">{chat.time}</time>
            </div>

            {/* Main Message */}
            <div className="chat-bubble bg-blue-500 dark:bg-gray-700 dark:text-neutral-50">{chat.message}</div>
          </div>
        ))}
      </div>

      {/* Message input div */}
      <div className="flex items-center gap-2 mt-3">
        <input
          type="text"
          className="flex-1 p-2 rounded-xl border dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-neutral-400"
          placeholder="Type a message..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 dark:bg-[#385183] text-white rounded-xl hover:bg-blue-600 dark:hover:bg-[#2b3e65]"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default ChatBubble;
