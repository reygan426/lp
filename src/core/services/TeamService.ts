import type { TeamApiResponse, TeamItem } from "../types/team";
import ApiService from "./ApiService";

const TeamService = {
    async getAll(page = 1): Promise<TeamApiResponse> {
        try {
            const response = await ApiService.get('team', { page });
            return response.data;
        } catch (error) {
            console.error("Error fetching team:", error);
            throw error;
        }
    },

    async getBySlug(slug: string): Promise<TeamItem> {
        try {
            const response = await ApiService.get('team', slug);
            return response.data;
        } catch (error) {
            console.error("Error fetching team by slug:", error);
            throw error;
        }
    },
};

export default TeamService;