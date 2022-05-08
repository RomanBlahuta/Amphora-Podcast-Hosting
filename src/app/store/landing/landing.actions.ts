import {createAction, props} from '@ngrx/store';

export namespace LandingActions {
    export const loadPodcasts = createAction(
        '[Landing] Load Podcasts',
    );

    export const loadPodcastsSuccess = createAction(
        '[Landing] Load Podcasts Success',
          props<{ podcasts: any }>(),
    );

    export const loadPodcastsFailure = createAction(
        '[Landing] Load Podcasts Failure',
    );
}
