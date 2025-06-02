import PricingService from "@/core/services/PricingService";
import type { PricingApiResponse, PricingItem } from "@/core/types/pricing";
import { defineStore } from "pinia";

interface PricingState {
  price: PricingItem[];
  currentPrice: PricingItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const usePricingState = defineStore("pricing", {
  state: (): PricingState => ({
    price: [],
    currentPrice: null,
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
    async fetchPricing(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: PricingApiResponse = await PricingService.getAll(page);
        this.price = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch price";
        console.error("Error fetching price:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPricingBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const pricing = await PricingService.getBySlug(slug);
        this.currentPrice = pricing;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch pricing";
        console.error("Error fetching pricing:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});