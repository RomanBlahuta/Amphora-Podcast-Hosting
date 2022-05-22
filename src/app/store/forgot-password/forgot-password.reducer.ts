import {createReducer, on} from '@ngrx/store';
import {ForgotPasswordActions} from './forgot-password.actions';
import {ForgotPasswordFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export namespace fromForgotPassword {
    export const forgotPasswordFeatureKey = 'forgotPassword';

    export interface IState {
        [ForgotPasswordFormEnum.EMAIL]: string;
    }

    export const initialState: IState = {
        [ForgotPasswordFormEnum.EMAIL]: '',
    };

    export const reducer = createReducer(
        initialState,

        on(ForgotPasswordActions.input, (state, {value, field}) => ({
            ...state,
            [field]: value,
        })),

        on(ForgotPasswordActions.submit, (state) => state),

        on(ForgotPasswordActions.clear, (state) => initialState),
    );
}
