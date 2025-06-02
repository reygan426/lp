import BenefitService from "@/core/services/BenefitService";
import type { BenefitApiResponse, BenefitItem } from "@/core/types/benefit";
import { defineStore } from "pinia";

interface BenefitState {
  benefits: BenefitItem[];
  currentBenefit: BenefitItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const useBenefitState = defineStore("benefit", {
  state: (): BenefitState => ({
    benefits: [],
    currentBenefit: null,
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
    async fetchBenefit(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: BenefitApiResponse = await BenefitService.getAll(page);
        this.benefits = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch benefits";
        console.error("Error fetching benefits:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchBenefitBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const benefit = await BenefitService.getBySlug(slug);
        this.currentBenefit = benefit;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch benefit";
        console.error("Error fetching benefit:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});