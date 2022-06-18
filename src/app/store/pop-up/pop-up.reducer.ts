import {createReducer, on} from '@ngrx/store';
import {PopUpActions} from './pop-up.actions';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';
import {ContentTypesEnum} from '../../shared/enums/content-types.enum';

export namespace fromPopUp {
    export const popUpFeatureKey = 'popUp';

    export interface IState {
        error: boolean;
        errorMessage: string;
        common: PopUpTypesEnum;
        confirmDeletion: string;
        confirmDeletionType: ContentTypesEnum;
        confirmDeletionId: string;
    }

    export const initialState: IState = {
        error: false,
        errorMessage: null,
        common: null,
        confirmDeletion: null,
        confirmDeletionType: null,
        confirmDeletionId: null,
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
        on(PopUpActions.showConfirmDeletionPopUp, (state, {item, contentType, id}) => ({
            ...state,
            confirmDeletionType: contentType,
            confirmDeletion: item,
            confirmDeletionId: id,
            common: PopUpTypesEnum.CONFIRM_DELETION,
        })),
        on(PopUpActions.hideConfirmDeletionPopUp, (state) => ({
            ...state,
            confirmDeletion: null,
            confirmDeletionType: null,
            confirmDeletionId: null,
            common: null,
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
