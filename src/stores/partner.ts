import PartnerService from "@/core/services/PartnerService";
import type { PartnerApiResponse, PartnerItem } from "@/core/types/partner";
import { defineStore } from "pinia";

interface PartnerState {
  partners: PartnerItem[];
  currentPartner: PartnerItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const usePartnerStore = defineStore("partner", {
  state: (): PartnerState => ({
    partners: [],
    currentPartner: null,
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
    async fetchPartner(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: PartnerApiResponse = await PartnerService.getAll(page);
        this.partners = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partners";
        console.error("Error fetching partners:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPartnerBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const partner = await PartnerService.getBySlug(slug);
        this.currentPartner = partner;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partner";
        console.error("Error fetching partner:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});