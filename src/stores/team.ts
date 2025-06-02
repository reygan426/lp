import TeamService from "@/core/services/TeamService";
import type { TeamApiResponse, TeamItem } from "@/core/types/team";
import { defineStore } from "pinia";

interface TeamState {
  teams: TeamItem[];
  currentTeam: TeamItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const useTeamStore = defineStore("team", {
  state: (): TeamState => ({
    teams: [],
    currentTeam: null,
    loading: false,
    error: null,
    pagination: {
      currentPage: 1,
      lastPage: 1,
      perPage: 10,
      total: 0,
    },
  }),

  actions: {
    async fetchTeam(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: TeamApiResponse = await TeamService.getAll(page);

        const newTeams = response.data.filter(newItem =>
          !this.teams.some(existingItem => existingItem.id === newItem.id)
        );

        this.teams = [...this.teams, ...newTeams];

        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch teams";
        console.error("Error fetching teams:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTeamBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const team = await TeamService.getBySlug(slug);
        this.currentTeam = team;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch team";
        console.error("Error fetching team:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});