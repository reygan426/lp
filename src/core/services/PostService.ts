
import type { PostApiResponse, PostItem } from "../types/post";
import ApiService from "./ApiService";

const PostService = {
  async getAll(page = 1): Promise<PostApiResponse> {
    try {
      const response = await ApiService.get(`post?page=${page}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching post:", error);
      throw error;
    }
  },

  async getBySlug(slug: string): Promise<PostItem> {
    try {
      const response = await ApiService.get(`post/${slug}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching post by slug:", error);
      throw error;
    }
  },
};

export default PostService;