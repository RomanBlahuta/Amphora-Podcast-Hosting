import {fromDashboard} from './dashboard.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectDashboardState = createFeatureSelector<fromDashboard.IState>(
    fromDashboard.dashboardFeatureKey,
);

export namespace DashboardSelectors {
    export const selectAllShows = createSelector(
        selectDashboardState,
        (state) => state.shows,
    );

    export const selectFilteredShowsForView = createSelector(
        selectDashboardState,
        (state) => state.shows,
    );

    export const selectCurrentPage = createSelector(
        selectDashboardState,
        (state) => state.currentPage,
    );
}
