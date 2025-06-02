// stores/agenda.ts
import { defineStore } from "pinia";
import AgendaService from "@/core/services/AgendaService";
import type { AgendaItem, AgendaApiResponse } from "@/core/types/agenda";

interface AgendaState {
  agendas: AgendaItem[];
  currentAgenda: AgendaItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const useAgendaStore = defineStore("agenda", {
  state: (): AgendaState => ({
    agendas: [],
    currentAgenda: null,
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
    async fetchAgendas(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: AgendaApiResponse = await AgendaService.getAll(page);
        this.agendas = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch agendas";
        console.error("Error fetching agendas:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchAgendaBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const agenda = await AgendaService.getBySlug(slug);
        this.currentAgenda = agenda;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch agenda";
        console.error("Error fetching agenda:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});