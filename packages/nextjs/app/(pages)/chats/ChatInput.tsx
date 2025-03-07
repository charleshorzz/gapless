import { useState } from "react";

// Icon for send button

const ChatInput = () => {
  const [message, setMessage] = useState("");

  // Send message logic here
  const handleSend = () => {
    if (message.trim() !== "") {
      console.log(message);
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="flex items-center gap-2 mt-3">
      <input
        type="text"
        className="flex-1 p-2  rounded-xl border dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-neutral-400"
        placeholder="Type a message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSend()} // Send on Enter
      />
    </div>
  );
};

export default ChatInput;
