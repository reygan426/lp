export interface TestimonialItem {
    id: number;
    name: string;          
    title: string;         
    slug: string;
    program_id: number;     
    description: string;
    image: string;
    yt_link: string | null; 
    home: number | null;   
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface TestimonialApiResponse {
    current_page: number;
    data: TestimonialItem[];
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
