import ChatService from "@/core/services/ChatService";
import type { Chat } from "@/core/types/chat";
import { defineStore } from "pinia";

interface ChatStore {
  chat: Chat[] | null;
  loading: boolean;
  error: string | null;
}

export const useChatStore = defineStore("chat", {
  state: (): ChatStore => ({
    chat: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchChat() {
      this.loading = true;
      this.error = null;
      try {
        const response = await ChatService.getAll();
        this.chat = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch chat";
        console.error("Error fetching chat:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
