import UnggulanService from "@/core/services/UnggulanService";
import type { UnggulanApiResponse, UnggulanItem } from "@/core/types/unggulan";
import { defineStore } from "pinia";

interface UnggulanState {
  unggulans: UnggulanItem[];
  currentUnggulan: UnggulanItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const useUnggulanStore = defineStore("unggulan", {
  state: (): UnggulanState => ({
    unggulans: [],
    currentUnggulan: null,
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
    async fetchUnggulan(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: UnggulanApiResponse = await UnggulanService.getAll(page);
        this.unggulans = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch unggulans";
        console.error("Error fetching unggulans:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchUnggulanBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const unggulan = await UnggulanService.getBySlug(slug);
        this.currentUnggulan = unggulan;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch unggulan";
        console.error("Error fetching unggulan:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});