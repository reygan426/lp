import type { TestimonialApiResponse, TestimonialItem } from "../types/testimoni";
import ApiService from "./ApiService";

const TestimonialService = {
    async getAll(page = 1): Promise<TestimonialApiResponse> {
        try {
            const response = await ApiService.get(`testimoni?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching testimoni:", error);
            throw error;
        }
    },

    async getBySlug(slug: string): Promise<TestimonialItem> {
        try {
            const response = await ApiService.get(`testimoni`, slug);
            return response.data;
        } catch (error) {
            console.error("Error fetching testimoni by slug:", error);
            throw error;
        }
    },
};

export default TestimonialService;