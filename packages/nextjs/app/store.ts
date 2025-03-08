import { create } from "zustand";

interface OpenChat {
  openChat: boolean;
  toggleOpen: () => void;
}

export const useOpenStore = create<OpenChat>(set => ({
  openChat: false, // Initial state
  toggleOpen: () => set(state => ({ openChat: !state.openChat })), // Toggle function
}));

//  For store selected user chat info
interface ChatData {
  blockNumber: string;
  id: string;
  ipfsHash: string;
  sender: string;
  receiver: string;
  transactionHash: string;
  blockTimestamp: string;
}

interface ChatStore {
  selectedChat: ChatData | null;
  chatWith: string; // New state variable
  setSelectedChat: (chat: ChatData) => void;
  setChatWith: (name: string) => void; // Setter for chatWith
}

export const useChatStore = create<ChatStore>(set => ({
  selectedChat: null,
  chatWith: "",
  setSelectedChat: chat => set({ selectedChat: chat }),
  setChatWith: name => set({ chatWith: name }), // New setter function
}));
