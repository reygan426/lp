import TestimonialService from "@/core/services/TestimonialService";
import type { TestimonialApiResponse, TestimonialItem } from "@/core/types/testimoni";
import { defineStore } from "pinia";

interface TestimonialState {
  testimonials: TestimonialItem[];
  currentTestimonial: TestimonialItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const useTestimoniStore = defineStore("testimonial", {
  state: (): TestimonialState => ({
    testimonials: [],
    currentTestimonial: null,
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
    async fetchTestimonial(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: TestimonialApiResponse = await TestimonialService.getAll(page);
        this.testimonials = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch testimonials";
        console.error("Error fetching testimonials:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTestimonialBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const testimonial = await TestimonialService.getBySlug(slug);
        this.currentTestimonial = testimonial;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch testimonial";
        console.error("Error fetching testimonial:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});