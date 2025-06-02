import AssesmentService from "@/core/services/AssesmentService";
import type { AssesmentApiResponse, AssesmentItem } from "@/core/types/assesment";
import { defineStore } from "pinia";

interface AssesmentState {
  assesments: AssesmentItem[];
  currentAssesments: AssesmentItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const useAssesmentStore = defineStore("assesment", {
  state: (): AssesmentState => ({
    assesments: [],
    currentAssesments: null,
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
    async fetchAssesment(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: AssesmentApiResponse = await AssesmentService.getAll(page);
        this.assesments = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch assesments";
        console.error("Error fetching assesments:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchAssesmentBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const assesment = await AssesmentService.getBySlug(slug);
        this.currentAssesments = assesment;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch assesment";
        console.error("Error fetching assesment:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});