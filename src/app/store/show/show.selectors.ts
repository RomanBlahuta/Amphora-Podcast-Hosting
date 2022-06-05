import {fromShow} from './show.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectShowState = createFeatureSelector<fromShow.IState>(
    fromShow.showFeatureKey,
);

export namespace ShowSelectors {
    export const selectCurrentPage = createSelector(
        selectShowState,
        (state) => state.pagination.currentPage,
    );

    export const selectShowId = createSelector(
        selectShowState,
        (state) => state.id,
    );

    export const selectShowData = createSelector(
        selectShowState,
        (state) => state.show,
    );

    export const selectDisplayedIndexes = createSelector(
        selectShowState,
        (state) => state.pagination.displayedIndexes,
    );

    export const selectTotalPages = createSelector(
        selectShowState,
        (state) => state.pagination.totalPages,
    );

    export const selectIsSeriesActive = createSelector(
        selectShowState,
        (state: fromShow.IState, id: string) => id === state.activeSeries,
    );
}
