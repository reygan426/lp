import PostService from "@/core/services/PostService";
import type { PostApiResponse, PostItem } from "@/core/types/post";
import { defineStore } from "pinia";

interface PostState {
  posts: PostItem[];
  currentPost: PostItem | null;
  loading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}

export const usePostStore = defineStore("post", {
  state: (): PostState => ({
    posts: [],
    currentPost: null,
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
    async fetchPosts(page = 1) {
      this.loading = true;
      this.error = null;
      try {
        const response: PostApiResponse = await PostService.getAll(page);
        this.posts = response.data;
        this.pagination = {
          currentPage: response.current_page,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        };
      } catch (error: any) {
        this.error = error.message || "Failed to fetch posts";
        console.error("Error fetching posts:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPostBySlug(slug: string) {
      this.loading = true;
      this.error = null;
      try {
        const post = await PostService.getBySlug(slug);
        this.currentPost = post;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch post";
        console.error("Error fetching post:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});