import {createReducer, on} from '@ngrx/store';
import {LandingActions} from './landing.actions';
import {ISliderState} from '../../shared/interfaces/slider-state.interface';

export namespace fromLanding {
    export const landingFeatureKey = 'landing';

    export interface IState {
        featuresSlider: ISliderState;
        podcastsSlider: ISliderState;
        topShows: any[];
    }

    export const initialState: IState = {
        featuresSlider: {
            currentSlide: 0,
        },
        podcastsSlider: {
            currentSlide: 0,
        },
        topShows: [],
    };

    export const reducer = createReducer(
        initialState,

        on(LandingActions.changeFeatureSlide, (state, {slide}) => ({
            ...state,
            featuresSlider: {
                ...state.featuresSlider,
                currentSlide: slide,
            }
        })),

        on(LandingActions.changePodcastSlide, (state, {slide}) => ({
            ...state,
            podcastsSlider: {
                ...state.podcastsSlider,
                currentSlide: slide,
            }
        })),
    );
}
