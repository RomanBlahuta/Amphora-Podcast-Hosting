import {fromLanding} from './landing.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectLandingState = createFeatureSelector<fromLanding.IState>(
    fromLanding.landingFeatureKey,
);

export namespace LandingSelectors {
    export const selectPodcasts = createSelector(
        selectLandingState,
        (state) => state.podcasts,
    );
}
