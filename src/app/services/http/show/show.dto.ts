export interface ILoadPaginatedShowsResponseItemDTO {
    id: string;
    title: string;
    show_link: string;
    media_link: string;
    description: string;
    generator: string;
    language: string;
    show_copyright: string;
    last_build_date: string;
    image: string;
    podcast_owner: string;
    is_locked: boolean;
    category: string;
    series: string[];
    featured: boolean;
}

export interface ILoadPaginatedShowsResponseDTO {
    items: ILoadPaginatedShowsResponseItemDTO[];
    total: number;
    page: number;
    size: number;
}


export interface ILoadShowResponseDTO {
    is_removed: boolean;
    id: string;
    title: string;
    description: string;
    language: string;
    show_copyright: string;
    category: string;
    series: string[];
    show_link: string;
    media_link: string;
    generator: string;
    featured: boolean;
    image: string;
    is_locked: true;
    owner: string;
    last_build_date: string;
    feed_file_link: string;
}