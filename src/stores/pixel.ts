import PixelService from "@/core/services/PixelService";
import type { Pixel } from "@/core/types/pixel";
import { defineStore } from "pinia";

interface PixelStore {
  pixel: Pixel[] | null;
  loading: boolean;
  error: string | null;
}

export const usePixelStore = defineStore("pixel", {
  state: (): PixelStore => ({
    pixel: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchPixel() {
      this.loading = true;
      this.error = null;
      try {
        const response = await PixelService.getAll();
        this.pixel = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch pixel";
        console.error("Error fetching pixel:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
