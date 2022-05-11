import {createReducer, on} from '@ngrx/store';
import {ResetPasswordActions} from './reset-password.actions';
import {ResetPasswordFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export namespace fromResetPassword {
    export const resetPasswordFeatureKey = 'resetPassword';

    export interface IState {
        [ResetPasswordFormEnum.EMAIL]: string;
        [ResetPasswordFormEnum.NEW_PASSWORD]: string;
    }

    export const initialState: IState = {
        [ResetPasswordFormEnum.EMAIL]: '',
        [ResetPasswordFormEnum.NEW_PASSWORD]: '',
    };

    export const reducer = createReducer(
        initialState,

        on(ResetPasswordActions.input, (state, {value, field}) => ({
            ...state,
            [field]: value,
        })),

        on(ResetPasswordActions.submit, (state) => state),

        on(ResetPasswordActions.clear, (state) => initialState),
    );
}
