import {EpisodeTypesEnum} from '../../../shared/enums/episode-types.enum';

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
}

export interface ILoadEpisodesByShowIdResponseDto {
    items: ILoadEpisodesByShowIdResponseItemDto[];
    total: number;
    page: number;
    size: number;
}
