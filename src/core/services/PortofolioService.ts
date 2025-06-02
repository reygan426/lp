import type { PortofolioApiResponse, PortofolioItem } from "../types/portofolio";
import ApiService from "./ApiService";

const PortofolioService = {
    async getAll(page = 1): Promise<PortofolioApiResponse> {
        try {
            const response = await ApiService.get(`portofolio?page=${page}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching portofolio:", error);
            throw error;
        }
    },

    async getBySlug(slug: string): Promise<PortofolioItem> {
        try {
            const response = await ApiService.get(`portofolio/${slug}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching portofolio by slug:", error);
            throw error;
        }
    },
};

export default PortofolioService;