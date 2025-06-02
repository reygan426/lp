export interface PricingItem {
    id: number;
    title: string;
    slug: string;
    description: string;
    program_id: string;
    price: string;
    diskon: string;
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PricingApiResponse {
    current_page: number;
    data: PricingItem[];
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
