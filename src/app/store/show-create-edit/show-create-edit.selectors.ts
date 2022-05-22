import {fromShowCreateEdit} from './show-create-edit.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectShowState = createFeatureSelector<fromShowCreateEdit.IState>(
    fromShowCreateEdit.showCreateEditFeatureKey,
);

export namespace ShowCreateEditSelectors {
    // export const selectCurrentPage = createSelector(
    //     selectShowState,
    //     (state) => state.pagination.currentPage,
    // );
}
