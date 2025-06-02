export interface SliderItem {
    id: number;
    title: string;
    slug: string;
    program_id: number;
    image: string;
    description: string;
    align: string | null;
    button: string;
    link: string | null;
    yt_id: string | null;
    home: number | null;
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface SliderApiResponse {
    current_page: number;
    data: SliderItem[];
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
