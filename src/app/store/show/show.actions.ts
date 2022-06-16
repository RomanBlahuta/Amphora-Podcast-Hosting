import {createAction, props} from '@ngrx/store';
import {ILoadShowResponseDTO} from '../../services/http/show/show.dto';
import {
    ILoadEpisodesByShowIdResponseDto,
} from '../../services/http/episode/episode.dto';

export namespace ShowActions {
    export const changePage = createAction(
        '[Show] Change Page',
        props<{index: number}>(),
    );

    export const setActiveSeries = createAction(
        '[Show] Set Active Series',
        props<{id: string}>(),
    );

    export const loadShow = createAction(
        '[Show] Load Show',
        props<{id: string}>(),
    );

    export const loadShowSuccess = createAction(
        '[Show] Load Show Success',
        props<{show: ILoadShowResponseDTO}>(),
    );

    export const loadShowFailure = createAction(
        '[Show] Load Show Failure',
    );

    export const loadShowEpisodes = createAction(
        '[Show] Load Show Episodes',
        props<{id: string}>(),
    );

    export const loadShowEpisodesSuccess = createAction(
        '[Show] Load Show Episodes Success',
        props<{episodes: ILoadEpisodesByShowIdResponseDto}>(),
    );

    export const loadShowEpisodesFailure = createAction(
        '[Show] Load Show Episodes Failure',
    );

    export const search = createAction(
        '[Show] Search',
        props<{value: string}>(),
    );

    export const deleteShow = createAction(
        '[Show] Delete Show',
    );

    export const deleteShowSuccess = createAction(
        '[Show] Delete Show Success',
    );
}
