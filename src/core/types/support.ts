export interface SupportItem {
    id: number;
    title: string;
    slug: string;
    name: string;
    jabatan: string;
    id_yt: string | null;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface SupportApiResponse {
    current_page: number;
    data: SupportItem[];
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
