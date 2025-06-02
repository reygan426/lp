import ProgramService from "@/core/services/ProgramService";
import type { ProgramApiResponse, ProgramItem } from "@/core/types/program";
import { defineStore } from "pinia";

interface ProgramState {
  programs: ProgramItem[];
  currentProgram: ProgramItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const useProgramStore = defineStore("program", {
  state: (): ProgramState => ({
    programs: [],
    currentProgram: null,
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
    async fetchProgram(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: ProgramApiResponse = await ProgramService.getAll(page);
        this.programs = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch programs";
        console.error("Error fetching programs:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchProgramBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const program = await ProgramService.getBySlug(slug);
        this.currentProgram = program;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch program";
        console.error("Error fetching program:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});