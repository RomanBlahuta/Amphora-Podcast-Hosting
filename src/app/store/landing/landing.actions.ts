import {createAction, props} from '@ngrx/store';

export namespace LandingActions {
    export const changeFeatureSlide = createAction(
        '[Landing] Change Feature Slide',
        props<{ slide: number }>(),
    );

    export const changePodcastSlide = createAction(
        '[Landing] Change Podcast Slide',
        props<{ slide: number }>(),
    );
}
