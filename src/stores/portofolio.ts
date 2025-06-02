import PortofolioService from "@/core/services/PortofolioService";
import type { PortofolioApiResponse, PortofolioItem } from "@/core/types/portofolio";
import { defineStore } from "pinia";

interface PortofolioState {
  portofolios: PortofolioItem[];
  currentPortofolio: PortofolioItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const usePortofolioState = defineStore("portofolio", {
  state: (): PortofolioState => ({
    portofolios: [],
    currentPortofolio: null,
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
    async fetchPortofolio(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: PortofolioApiResponse = await PortofolioService.getAll(page);
        this.portofolios = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch portofolios";
        console.error("Error fetching portofolios:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPortofolioBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const portofolio = await PortofolioService.getBySlug(slug);
        this.currentPortofolio = portofolio;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch portofolio";
        console.error("Error fetching portofolio:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});