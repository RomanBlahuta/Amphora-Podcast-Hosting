import {createReducer, on} from '@ngrx/store';
import {ForgotPasswordActions} from './forgot-password.actions';
import {ForgotPasswordFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export namespace fromForgotPassword {
    export const forgotPasswordFeatureKey = 'forgotPassword';

    export interface IState {
        [ForgotPasswordFormEnum.EMAIL]: string;
        valid: boolean;
    }

    export const initialState: IState = {
        [ForgotPasswordFormEnum.EMAIL]: '',
        valid: false,
    };

    export const reducer = createReducer(
        initialState,

        on(ForgotPasswordActions.input, (state, {value, field}) => ({
            ...state,
            [field]: value,
        })),

        on(ForgotPasswordActions.setValidity, (state, {valid}) => ({
            ...state,
            valid,
        })),

        on(ForgotPasswordActions.submit, (state) => state),

        on(ForgotPasswordActions.clear, (state) => initialState),
    );
}
