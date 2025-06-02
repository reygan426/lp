export interface PortofolioItem {
    id: number;
    title: string;          
    slug: string;
    description: string;
    program_id: number;     
    home: number | null;   
    logo: string;          
    image1: string | null; 
    image2: string | null; 
    image3: string | null; 
    image4: string | null; 
    yt_id: string | null; 
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PortofolioApiResponse {
    current_page: number;
    data: PortofolioItem[];
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
