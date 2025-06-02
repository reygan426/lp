import type { ProgramApiResponse, ProgramItem } from "../types/program";
import ApiService from "./ApiService";

const ProgramService = {
  async getAll(page = 1): Promise<ProgramApiResponse> {
    try {
      const response = await ApiService.get(`program?page=${page}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching program:", error);
      throw error;
    }
  },

  async getBySlug(slug: string): Promise<ProgramItem> {
    try {
      const response = await ApiService.get(`program/${slug}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching program by slug:", error);
      throw error;
    }
  },
};

export default ProgramService;