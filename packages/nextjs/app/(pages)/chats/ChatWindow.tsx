import Image from "next/image";
import CustomSeparaor from "~~/app/CustomSeparaor";
import BackButton from "./BackButton";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  return (
    // <div className="h-fit min-h-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-3 shadow-sm flex flex-col">
    <>
      {/* Avatar at the top */}
      <div className="flex gap-x-2 items-center">
        <BackButton/>
        <div className="avatar">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s"
              alt="User Profile Image"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-0 w-full">
          <p className="text-base lg:text-lg font-bold m-0">User Name</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 m-0">Description</p>
        </div>
      </div>
      <CustomSeparaor />

      {/* Middle content that takes up remaining space */}
      {/* Pending to solve: overflow-y-scroll */}
      <div className=" flex-grow">
        <ChatBubble />
      </div>

      {/* ChatInput at the bottom */}
      <ChatInput />
      </>
  );
};

export default ChatWindow;
