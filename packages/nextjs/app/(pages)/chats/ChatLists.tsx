"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import CustomCard from "~~/app/CustomCard";

type Message = {
  id: number;
  fromUser: number;
  toUser: number;
  message: string;
  image?: string | null;
  timestamp: number;
};

interface User {
  id: number;
  username: string;
  profileImage: string;
}

const DUMMY_MESSAGES: Message[] = [
  { id: 1, fromUser: 5, toUser: 2, message: "Hey, how are you?", timestamp: 1710000000000 },
  { id: 2, fromUser: 2, toUser: 5, message: "I'm good, thanks!", timestamp: 1710003600000 },
  { id: 3, fromUser: 5, toUser: 3, message: "Let's catch up later.", timestamp: 1710007200000 },
  { id: 4, fromUser: 3, toUser: 5, message: "Sure, let me know when.", timestamp: 1710010800000 },
  { id: 5, fromUser: 4, toUser: 5, message: "Did you check the report?", timestamp: 1710014400000 },
  { id: 6, fromUser: 5, toUser: 4, message: "Not yet, I'll do it soon.", timestamp: 1710018000000 },
  { id: 7, fromUser: 6, toUser: 5, message: "Are you coming to the meeting?", timestamp: 1710021600000 },
  { id: 8, fromUser: 6, toUser: 5, message: "Yes, I'll be there.", timestamp: 1710025200000 },
  { id: 9, fromUser: 7, toUser: 5, message: "Happy Birthday!", timestamp: 1710028800000 },
  { id: 10, fromUser: 7, toUser: 5, message: "Thank you! Appreciate it.", timestamp: 1710032400000 },
  { id: 11, fromUser: 8, toUser: 5, message: "Let's meet for coffee.", timestamp: 1710036000000 },
  { id: 12, fromUser: 8, toUser: 5, message: "Sounds great, what time?", timestamp: 1710039600000 },
  { id: 13, fromUser: 9, toUser: 5, message: "Did you finish the project?", timestamp: 1710043200000 },
  { id: 14, fromUser: 9, toUser: 5, message: "Almost done, just some tweaks left.", timestamp: 1710046800000 },
  { id: 15, fromUser: 10, toUser: 50, message: "Game night at my place!", timestamp: 1710050400000 },
  { id: 16, fromUser: 10, toUser: 5, message: "I'm in! What time?", timestamp: 1710054000000 },
  { id: 17, fromUser: 11, toUser: 5, message: "Can you review my code?", timestamp: 1710057600000 },
  { id: 18, fromUser: 12, toUser: 5, message: "Sure! Send it over.", timestamp: 1710061200000 },
  { id: 19, fromUser: 13, toUser: 5, message: "Let's go hiking this weekend.", timestamp: 1710064800000 },
  { id: 20, fromUser: 14, toUser: 5, message: "That sounds fun! Count me in.", timestamp: 1710068400000 },
  { id: 20, fromUser: 15, toUser: 5, message: "Ni Bu Pei Dang Zhu Bo.", timestamp: 1710068400000 },
];

const DUMMY_USERS: Record<number, User> = {
  1: {
    id: 1,
    username: "Eve",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  2: {
    id: 2,
    username: "Alice",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  3: {
    id: 3,
    username: "Bob",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  4: {
    id: 4,
    username: "Charlie",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  5: {
    id: 5,
    username: "David",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  6: {
    id: 6,
    username: "Sophia",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  7: {
    id: 7,
    username: "Michael",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  8: {
    id: 8,
    username: "Emma",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  9: {
    id: 9,
    username: "Liam",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  10: {
    id: 10,
    username: "Olivia",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  11: {
    id: 11,
    username: "Jay",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  12: {
    id: 12,
    username: "Max",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  13: {
    id: 13,
    username: "Min",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  14: {
    id: 14,
    username: "Subway",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
  15: {
    id: 15,
    username: "77",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9ig7IuBX2zkSTS8JJjOMctKZc14LsIGriQ&s",
  },
};

const ChatLists = () => {
  const [query, setQuery] = useState("");

  const getLatestMessages = (messages: Message[]): Message[] => {
    const latestMessagesMap = new Map<number, Message>();

    messages.forEach(message => {
      const otherUser = message.fromUser === 5 ? message.toUser : message.fromUser;

      const existingMessage = latestMessagesMap.get(otherUser);
      if (!existingMessage || message.timestamp > existingMessage.timestamp) {
        latestMessagesMap.set(otherUser, message);
      }
    });

    return Array.from(latestMessagesMap.values()).sort((a, b) => b.timestamp - a.timestamp);
  };

  const latestMessages = getLatestMessages(DUMMY_MESSAGES);

  const filteredItems = useMemo(() => {
    return latestMessages.filter(latestMessage => {
      const otherUser =
        latestMessage.fromUser === 5
          ? DUMMY_USERS[latestMessage.toUser]?.username
          : DUMMY_USERS[latestMessage.fromUser]?.username;

      return otherUser?.toLowerCase().includes(query.toLowerCase());
    });
  }, [latestMessages, query]);

  return (
    <CustomCard>
      <div className="flex flex-col gap-3 overflow-y-scroll">
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

        <div className="overflow-scroll">
          <div>
            {filteredItems.map(list => {
              const otherUser = list.fromUser === 5 ? list.toUser : list.fromUser;
              const user = DUMMY_USERS[otherUser];

              return (
                <div
                  className="rounded-lg dark:border-neutral-700 bg-white dark:bg-neutral-800 mb-1 hover:bg-gray-100 dark:hover:bg-neutral-700"
                  key={list.id}
                >
                  <div className="card card-sm">
                    <div className="card-body flex flex-row p-3">
                      <div className="avatar">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full">
                          <Image src={user?.profileImage} alt="User Profile Image" width={100} height={100} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-0 w-full">
                        <div className="flex flex-row items-center justify-between m-0">
                          <p className="text-base lg:text-xl font-bold m-0">{user?.username}</p>
                          <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 m-0 text-right">
                            {new Date(list.timestamp).toLocaleDateString()}
                          </p>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 m-0">{list.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CustomCard>
  );
};

export default ChatLists;
