// services/AgendaService.ts
import type { AgendaItem, AgendaApiResponse } from "../types/agenda";
import ApiService from "./ApiService";

const AgendaService = {
  async getAll(page = 1): Promise<AgendaApiResponse> {
    try {
      const response = await ApiService.get(`agenda?page=${page}`);
      return response.data; // Ambil data dari response Axios
    } catch (error) {
      console.error("Error fetching agenda:", error);
      throw error;
    }
  },

  async getBySlug(slug: string): Promise<AgendaItem> {
    try {
      const response = await ApiService.get(`agenda/${slug}`);
      return response.data; // Ambil data dari response Axios
    } catch (error) {
      console.error("Error fetching agenda by slug:", error);
      throw error;
    }
  },
};

export default AgendaService;
