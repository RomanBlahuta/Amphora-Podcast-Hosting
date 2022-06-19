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

    export const selectIsLoading = createSelector(
        selectDashboardState,
        (state) => state.isLoading,
    );

    export const selectTotalPages = createSelector(
        selectDashboardState,
        (state) => state.pagination.totalPages,
    );

    export const selectSearchString = createSelector(
        selectDashboardState,
        (state) => state.searchValue,
    );

    export const selectCurrentPage = createSelector(
        selectDashboardState,
        (state) => state.pagination.currentPage,
    );

    export const selectDisplayedIndexes = createSelector(
        selectDashboardState,
        (state) => state.pagination.displayedIndexes,
    );
}
