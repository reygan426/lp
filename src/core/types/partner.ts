export interface PartnerItem {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    program_desc: string | null;
    web: string | null;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PartnerApiResponse {
    current_page: number;
    data: PartnerItem[];
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
