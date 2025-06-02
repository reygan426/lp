import type { SupportApiResponse, SupportItem } from "../types/support";
import ApiService from "./ApiService";

const SupportService = {
    async getAll(page = 1): Promise<SupportApiResponse> {
        try {
            const response = await ApiService.get(`support?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching support:", error);
            throw error;
        }
    },

    async getBySlug(slug: string): Promise<SupportItem> {
        try {
            const response = await ApiService.get(`support/${slug}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching support by slug:", error);
            throw error;
        }
    },
};

export default SupportService;