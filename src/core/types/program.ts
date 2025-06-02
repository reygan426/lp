export interface ProgramItem {
    id: number;
    name: string;
    slug: string;
    category: string | null;
    title1: string;
    description1: string;
    image1: string;
    title2: string;
    description2: string;
    image2: string;
    title3: string;
    description3: string;
    image3: string;
    title4: string;
    description4: string;
    image4: string;
    age: string;
    weekly: string;
    periode: string;
    ourteam_id: number;
    class_size: number;
    time_table: number;
    time_table2: number;
    content: string;
    cta: string;
    link_program: string;
    id_yt: string;
    brosur: string;
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface ProgramApiResponse {
    current_page: number;
    data: ProgramItem[];
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