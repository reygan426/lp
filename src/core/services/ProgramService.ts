// services/AgendaService.ts
import type { AgendaItem, AgendaApiResponse } from "../types/agenda";
import ApiService from "./ApiService";

const AgendaService = {
  async getAll(page = 1): Promise<AgendaApiResponse> {
    try {
      const response = await ApiService.get(`program?page=${page}`);
      return response.data; // Ambil data dari response Axios
    } catch (error) {
      console.error("Error fetching program:", error);
      throw error;
    }
  },

  async getBySlug(slug: string): Promise<AgendaItem> {
    try {
      const response = await ApiService.get(`program/${slug}`);
      return response.data; // Ambil data dari response Axios
    } catch (error) {
      console.error("Error fetching program by slug:", error);
      throw error;
    }
  },
};

export default AgendaService;
