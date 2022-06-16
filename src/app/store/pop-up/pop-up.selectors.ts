import {createFeatureSelector, createSelector} from '@ngrx/store';
import {fromPopUp} from './pop-up.reducer';

export const selectPopUpState = createFeatureSelector<fromPopUp.IState>(
    fromPopUp.popUpFeatureKey,
);

export namespace PopUpSelectors {
    export const selectErrorPopUp = createSelector(
        selectPopUpState,
        (state) => state.error,
    );

    export const selectCommonPopUp = createSelector(
        selectPopUpState,
        (state) => state.common,
    );

    export const selectErrorMessage = createSelector(
        selectPopUpState,
        (state) => state.errorMessage,
    );

    export const selectConfirmDeletionPopUp = createSelector(
        selectPopUpState,
        (state) => ({
            confirmDeletion: state.confirmDeletion,
            confirmDeletionType: state.confirmDeletionType,
        })
    );
}

