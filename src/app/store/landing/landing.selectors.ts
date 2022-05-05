import {fromLanding} from './landing.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectLandingState = createFeatureSelector<fromLanding.IState>(
    fromLanding.landingFeatureKey,
);

export namespace LandingSelectors {
    export const selectFeaturesSlide = createSelector(
        selectLandingState,
        (state) => state.featuresSlider.currentSlide,
    );

    export const selectPodcastsSlide = createSelector(
        selectLandingState,
        (state) => state.podcastsSlider.currentSlide,
    );
}
