import {StreamingIntegrationsEnum} from '../../../shared/enums/streaming-integrations.enum';

export interface ICreateShowRequestDTO {
    title: string;
    description: string;
    language: string;
    show_copyright: string;
    category: string;
    image_id: string;
    series: string[];
    selected_streamings: StreamingIntegrationsEnum[];
}

export interface ILoadPaginatedShowsResponseItemDTO {
    id: string;
    title: string;
    duration: number;
    episodes_number: number;
    show_link: string;
    media_link: string;
    description: string;
    generator: string;
    language: string;
    show_copyright: string;
    selected_streamings: StreamingIntegrationsEnum[];
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
    selected_streamings: StreamingIntegrationsEnum[];
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

export interface IDeleteShowResponseDTO {
}
