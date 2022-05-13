import {createReducer, on} from '@ngrx/store';
import {PopUpActions} from './pop-up.actions';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';

export namespace fromPopUp {
    export const popUpFeatureKey = 'popUp';

    export interface IState {
        error: boolean;
        errorMessage: string;
        common: PopUpTypesEnum;
    }

    export const initialState: IState = {
        error: false,
        errorMessage: null,
        common: null,
    };

    export const reducer = createReducer(
        initialState,

        on(PopUpActions.showErrorPopUp, (state, {errorMessage}) => ({
            ...state,
            error: true,
            errorMessage,
        })),
        on(PopUpActions.hideErrorPopUp, (state) => ({
            ...state,
            error: false,
            errorMessage: null,
        })),
        on(PopUpActions.showPopUp, (state, {popUpType}) => ({
            ...state,
            common: popUpType,
        })),
        on(PopUpActions.hidePopUp, (state) => ({
            ...state,
            common: null,
        })),
    );
}
