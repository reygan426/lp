import type { AssesmentApiResponse, AssesmentItem } from "../types/assesment";
import ApiService from "./ApiService";

const AssesmentService = {
    async getAll(page = 1): Promise<AssesmentApiResponse> {
        try {
            const response = await ApiService.get(`assesment?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching assesment:", error);
            throw error;
        }
    },

    async getBySlug(slug: string): Promise<AssesmentItem> {
        try {
            const response = await ApiService.get(`assesment/${slug}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching assesment by slug:", error);
            throw error;
        }
    },
};

export default AssesmentService;