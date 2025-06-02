import LegalService from "@/core/services/LegalService";
import type { LegalApiResponse, LegalItem } from "@/core/types/legal";
import { defineStore } from "pinia";

interface LegalState {
  legals: LegalItem[];
  currentLegal: LegalItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const useLegalState = defineStore("legal", {
  state: (): LegalState => ({
    legals: [],
    currentLegal: null,
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
    async fetchLegal(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: LegalApiResponse = await LegalService.getAll(page);
        this.legals = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch legals";
        console.error("Error fetching legals:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchLegalBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const legal = await LegalService.getBySlug(slug);
        this.currentLegal = legal;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch legal";
        console.error("Error fetching legal:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});