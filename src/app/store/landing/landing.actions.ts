import {createAction, props} from '@ngrx/store';
import {ILoadPaginatedShowsResponseDTO} from '../../services/http/show/show.dto';

export namespace LandingActions {
    export const loadPodcasts = createAction(
        '[Landing] Load Podcasts',
    );

    export const loadPodcastsSuccess = createAction(
        '[Landing] Load Podcasts Success',
          props<{ response: ILoadPaginatedShowsResponseDTO }>(),
    );

    export const loadPodcastsFailure = createAction(
        '[Landing] Load Podcasts Failure',
    );
}
