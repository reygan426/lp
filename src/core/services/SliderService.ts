import type { SliderApiResponse } from "../types/slider";
import ApiService from "./ApiService";

const SliderService = {
    async getAll(page = 1): Promise<SliderApiResponse> {
        try {
            const response = await ApiService.get(`slider?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching slider:", error);
            throw error;
        }
    },
};

export default SliderService;