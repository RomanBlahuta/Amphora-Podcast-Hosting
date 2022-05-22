import {createReducer, on} from '@ngrx/store';
import {ResetPasswordFormEnum} from '../../shared/enums/forms/auth-forms.enum';
import {ResetPasswordActions} from './reset-password.actions';

export namespace fromResetPassword {
    export const resetPasswordFeatureKey = 'resetPassword';

    export interface IState {
        [ResetPasswordFormEnum.CODE]: string;
        [ResetPasswordFormEnum.NEW_PASSWORD]: string;
    }

    export const initialState: IState = {
        [ResetPasswordFormEnum.CODE]: '',
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
