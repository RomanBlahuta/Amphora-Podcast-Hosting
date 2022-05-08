import {createReducer, on} from '@ngrx/store';
import {LandingActions} from './landing.actions';

export namespace fromLanding {
    export const landingFeatureKey = 'landing';

    export interface IState {
        podcasts: any[];
    }

    export const initialState: IState = {
        podcasts: [],
    };

    export const reducer = createReducer(
        initialState,

        on(LandingActions.loadPodcasts, (state) => state),
        on(LandingActions.loadPodcastsSuccess, (state, {podcasts}) => state),
        on(LandingActions.loadPodcastsFailure, (state) => state),
    );
}
