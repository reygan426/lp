import type { BenefitApiResponse, BenefitItem } from "../types/benefit";
import ApiService from "./ApiService";

const BenefitService = {
    async getAll(page = 1): Promise<BenefitApiResponse> {
        try {
            const response = await ApiService.get(`benefit?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching benefit:", error);
            throw error;
        }
    },

    async getBySlug(slug: string): Promise<BenefitItem> {
        try {
            const response = await ApiService.get(`benefit/${slug}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching benefit by slug:", error);
            throw error;
        }
    },
};

export default BenefitService;