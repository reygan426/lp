import type { LegalApiResponse, LegalItem } from "../types/legal";
import ApiService from "./ApiService";

const LegalService = {
    async getAll(page = 1): Promise<LegalApiResponse> {
        try {
            const response = await ApiService.get(`legal?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching legal:", error);
            throw error;
        }
    },

    async getBySlug(slug: string): Promise<LegalItem> {
        try {
            const response = await ApiService.get(`legal/${slug}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching legal by slug:", error);
            throw error;
        }
    },
};

export default LegalService;