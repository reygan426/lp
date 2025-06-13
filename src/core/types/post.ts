export interface PostItem {
  id: number;
  title: string;
  slug: string;
  category_id: number;
  description: string;
  content: string;
  image: string;
  user_id: number;
  pub_date: string;
  created_at: string;
  updated_at: string;
  category: PostCategory;
  user: PostUser
}

export interface PostUser {
  id: number;
  name: string;
  email: string;
}

export interface PostCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PostApiResponse {
  current_page: number;
  data: PostItem[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}