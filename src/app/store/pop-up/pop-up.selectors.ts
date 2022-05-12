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
}

