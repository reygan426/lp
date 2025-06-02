import type { PricingApiResponse, PricingItem } from "../types/pricing";
import ApiService from "./ApiService";

const PricingService = {
    async getAll(page = 1): Promise<PricingApiResponse> {
        try {
            const response = await ApiService.get(`pricing?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching pricing:", error);
            throw error;
        }
    },

    async getBySlug(slug: string): Promise<PricingItem> {
        try {
            const response = await ApiService.get(`pricing/${slug}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching pricing by slug:", error);
            throw error;
        }
    },
};

export default PricingService;