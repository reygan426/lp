export interface AgendaItem {
  id: number;
  title: string;
  slug: string;
  agendacat: string | null;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  content: string;
  location: string;
  yt_link: string;
  organizer: string;
  register_link: string;
  contact: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface AgendaApiResponse {
  current_page: number;
  data: AgendaItem[];
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