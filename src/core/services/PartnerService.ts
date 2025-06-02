import type { PartnerApiResponse, PartnerItem } from "../types/partner";
import ApiService from "./ApiService";

const PartnerService = {
    async getAll(page = 1): Promise<PartnerApiResponse> {
        try {
            const response = await ApiService.get(`partner?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching partner:", error);
            throw error;
        }
    },

    async getBySlug(slug: string): Promise<PartnerItem> {
        try {
            const response = await ApiService.get(`partner/${slug}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching partner by slug:", error);
            throw error;
        }
    },
};

export default PartnerService;