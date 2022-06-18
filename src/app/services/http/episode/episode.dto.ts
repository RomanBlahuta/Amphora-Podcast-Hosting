import {EpisodeTypesEnum} from '../../../shared/enums/episode-types.enum';

export interface ICreateEpisodeAudioResponseDto {
    episode_link: string;
    file_extension: string;
    episode_duration: string;
}

export interface ILoadEpisodeByIDResponseDTO {
    id: string;
    title: string;
    description: string;
    episode_num: number;
    season_num: number;
    explicit: true;
    episode_type: EpisodeTypesEnum;
    show_id: string;
    series: string;
    file_link: string;
    duration: number;
    cover_image: string;
    cover_link: string;
    episode_link: string;
    episode_guid: string;
    pub_date: string;
}

export interface ILoadEpisodesByShowIdResponseItemDto {
    id: string;
    title: string;
    description: string;
    episode_num: number;
    season_num: number;
    explicit: boolean;
    episode_type: EpisodeTypesEnum;
    show_id: string;
    series: string;
    file_link: string;
    episode_link: string;
    episode_guid: string;
    pub_date: string;
    duration: number;
    cover_link: string;
}

export interface ILoadEpisodesByShowIdResponseDto {
    items: ILoadEpisodesByShowIdResponseItemDto[];
    total: number;
    page: number;
    size: number;
}

export interface ICreateEpisodeRequestDTO {
    title: string;
    description: string;
    episode_num: number;
    season_num: number;
    explicit: boolean;
    episode_type: EpisodeTypesEnum;
    show_id: string;
    series: string;
    file_link: string;
    duration: number;
    cover_image: string;
    cover_link: string;
}

export interface ICreateEpisodeResponseDTO {
    id: string;
    title: string;
    description: string;
    episode_num: number;
    season_num: number;
    explicit: boolean;
    episode_type: EpisodeTypesEnum;
    show_id: string;
    series: string;
    file_link: string;
    duration: number;
    cover_image: string;
    cover_link: string;
    episode_link: string;
    episode_guid: string;
    pub_date: string;
}

export interface IDeleteEpisodeResponseDTO {
}
