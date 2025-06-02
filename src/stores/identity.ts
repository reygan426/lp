import IdentityService from "@/core/services/IdentityService";
import type { Identity } from "@/core/types/identity";
import { defineStore } from "pinia";

interface IdentityStore {
  identity: Identity[] | null;
  loading: boolean;
  error: string | null;
}

export const useIdentityStore = defineStore("identity", {
  state: (): IdentityStore => ({
    identity: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchIdentity() {
      this.loading = true;
      this.error = null;
      try {
        const response = await IdentityService.getAll();
        this.identity = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch identity";
        console.error("Error fetching identity:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
