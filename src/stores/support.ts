import SupportService from "@/core/services/SupportService";
import type { SupportApiResponse, SupportItem } from "@/core/types/support";
import { defineStore } from "pinia";

interface SupportState {
  supports: SupportItem[];
  currentSupport: SupportItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const useSupportState = defineStore("support", {
  state: (): SupportState => ({
    supports: [],
    currentSupport: null,
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
    async fetchSupport(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: SupportApiResponse = await SupportService.getAll(page);
        this.supports = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch supports";
        console.error("Error fetching supports:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchSupportBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const support = await SupportService.getBySlug(slug);
        this.currentSupport = support;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch support";
        console.error("Error fetching support:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});