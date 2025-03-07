import { create } from "zustand";

interface OpenChat {
  openChat: boolean;
  toggleOpen: () => void;
}

export const useOpenStore = create<OpenChat>((set) => ({
  openChat: false, // Initial state
  toggleOpen: () => set((state) => ({ openChat: !state.openChat })), // Toggle function
}));
