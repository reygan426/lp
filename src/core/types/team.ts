export interface TeamItem {
    id: number;
    ot_id: number;
    title: string;
    name: string;
    fb: string;
    ig: string;
    tt: string;
    phone: string;
    email: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface TeamApiResponse {
    current_page: number;
    data: TeamItem[];
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
