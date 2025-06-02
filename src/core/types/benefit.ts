export interface BenefitItem {
    id: number;
    title: string;
    slug: string;
    description: string;
    facility_id: number;
    home: string | null;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface BenefitApiResponse {
    current_page: number;
    data: BenefitItem[];
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
