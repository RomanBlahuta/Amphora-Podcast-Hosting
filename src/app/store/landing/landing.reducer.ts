import {createReducer, on} from '@ngrx/store';
import {LandingActions} from './landing.actions';
import {ILoadPaginatedShowsResponseItemDTO} from '../../services/http/show/show.dto';

export namespace fromLanding {
    export const landingFeatureKey = 'landing';

    export interface IState {
        podcasts: ILoadPaginatedShowsResponseItemDTO[];
    }

    export const initialState: IState = {
        podcasts: [],
    };

    export const reducer = createReducer(
        initialState,

        on(LandingActions.loadPodcasts, (state) => state),
        on(LandingActions.loadPodcastsSuccess, (state, {response}) => ({
            ...state,
            podcasts: response.items,
        })),
        on(LandingActions.loadPodcastsFailure, (state) => state),
    );
}
