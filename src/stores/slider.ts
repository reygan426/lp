import SliderService from "@/core/services/SliderService";
import type { SliderApiResponse, SliderItem } from "@/core/types/slider";
import { defineStore } from "pinia";

interface SliderState {
  sliders: SliderItem[];
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const useSliderStore = defineStore("slider", {
  state: (): SliderState => ({
    sliders: [],
    loading: false,
    error: null,
    pagination: {
      currentPage: 1,
      lastPage: 1,
      perPage: 10,
      total: 0,
    },
  }),

  actions: {
    async fetchSlider(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: SliderApiResponse = await SliderService.getAll(page);
        this.sliders = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch sliders";
        console.error("Error fetching sliders:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});