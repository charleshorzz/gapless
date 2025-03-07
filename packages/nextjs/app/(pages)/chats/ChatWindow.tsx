import Image from "next/image";
import BackButton from "./BackButton";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import CustomSeparaor from "~~/app/CustomSeparaor";
import { useChatStore } from "~~/app/store";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const ChatWindow = () => {
  const { chatWith } = useChatStore();

  return (
    <>
      {/* Avatar at the top */}
      <div className="flex gap-x-2 items-center">
        <BackButton />
        <div className="avatar">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full">
            <BlockieAvatar address={chatWith} size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-y-0 w-full">
          <p className="text-base lg:text-lg font-bold m-0">{chatWith}</p>
          {/* <p className="text-xs text-gray-600 dark:text-gray-400 m-0">Description</p> */}
        </div>
      </div>
      <CustomSeparaor />

      {/* Middle content that takes up remaining space */}
      <ChatBubble />

      {/* ChatInput at the bottom */}
      {/* <ChatInput /> */}
    </>
  );
};

export default ChatWindow;
