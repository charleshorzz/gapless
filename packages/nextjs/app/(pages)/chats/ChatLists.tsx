"use client";

import { useMemo, useState } from "react";
import { useOpenStore } from "~~/app/store";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { fetchDataFromIPFS } from "~~/utils/pinata";

// import { fetchDataFromIPFS } from "~~/utils/pinata";

interface ChatHistory {
  blockNumber: string;
  id: string;
  ipfsHash: string;
  sender: string;
  receiver: string;
  transactionHash: string;
  blockTimestamp: string;
}
type ChatListsProps = {
  chatHistory: ChatHistory[]; // Expecting an array of chat history objects
};

const ChatLists = ({ chatHistory }: ChatListsProps) => {
  const [query, setQuery] = useState("");
  const { toggleOpen } = useOpenStore();

  //  Sort the Message by latest
  const getLatestMessages = (messages: ChatHistory[]): ChatHistory[] => {
    const latestMessagesMap = new Map<string, ChatHistory>(); // Use string keys for addresses

    messages.forEach(message => {
      const otherUser =
        message.receiver === "0x6b7090baf7674bd83c8b89629fddb7ff3523ad09" ? message.sender : message.receiver;

      const existingMessage = latestMessagesMap.get(otherUser);

      // Store the latest message based on timestamp
      if (!existingMessage || BigInt(message.blockTimestamp) > BigInt(existingMessage.blockTimestamp)) {
        latestMessagesMap.set(otherUser, message);
      }
    });

    return Array.from(latestMessagesMap.values()).sort(
      (a, b) => Number(BigInt(b.blockTimestamp) - BigInt(a.blockTimestamp)), // Convert to number
    );
  };

  const latestMessages = getLatestMessages(chatHistory);

  const filteredItems = useMemo(() => {
    return latestMessages.filter(latestMessage => {
      const otherUser =
        latestMessage.receiver === "0x16bbc84ffacf9b172febf2d5b4e32e56a2c48b4ee578df53ad1a58bc1f02718d"
          ? latestMessage.receiver
          : latestMessage.sender;

      return otherUser?.toLowerCase().includes(query.toLowerCase());
    });
  }, [latestMessages, query]);

  return (
    <div className="h-fit min-h-full overflow-y-scroll rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-3 shadow-sm">
      <div className="flex flex-col gap-3 ">
        <label className="flex items-center gap-2 bg-white dark:bg-neutral-800 h-9 rounded-lg border border-neutral-200 dark:border-neutral-700 px-3">
          <svg
            className="h-4 w-4 text-neutral-500 dark:text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="w-full bg-transparent outline-none text-neutral-800 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
            placeholder="Search"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </label>

        <div className="max-h-[50vh] lg:max-h-none ">
          <div>
            {filteredItems.map(list => {
              const otherUser =
                list.receiver === "0x16bbc84ffacf9b172febf2d5b4e32e56a2c48b4ee578df53ad1a58bc1f02718d"
                  ? list.receiver
                  : list.sender;
              return (
                <div
                  className="rounded-lg dark:border-neutral-700 bg-white dark:bg-neutral-800 mb-1 hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer"
                  key={list.id}
                  onClick={toggleOpen}
                >
                  <div className="card card-sm">
                    <div className="card-body flex flex-row p-3">
                      <div className="avatar">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full">
                          <BlockieAvatar address={otherUser} size={24} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-0 w-full">
                        <div className="flex flex-row items-center justify-between m-0">
                          <p className="text-base lg:text-xl font-bold m-0">
                            {otherUser.slice(0, 6) + "..." + otherUser.slice(-4)}
                          </p>
                          <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 m-0 text-right">
                            {!isNaN(Number(list.blockTimestamp)) &&
                              new Date(Number(list.blockTimestamp) * 1000).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                          </p>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 m-0">
                          {/* Problem Here */}
                          {/* {fetchDataFromIPFS(list.ipfsHash)} */}
                          hi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLists;
