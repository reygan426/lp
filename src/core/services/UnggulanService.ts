import type { UnggulanApiResponse, UnggulanItem } from "../types/unggulan";
import ApiService from "./ApiService";

const UnggulanService = {
    async getAll(page = 1): Promise<UnggulanApiResponse> {
        try {
            const response = await ApiService.get(`unggulan?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching unggulan:", error);
            throw error;
        }
    },

    async getBySlug(slug: string): Promise<UnggulanItem> {
        try {
            const response = await ApiService.get(`unggulan/${slug}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching unggulan by slug:", error);
            throw error;
        }
    },
};

export default UnggulanService;