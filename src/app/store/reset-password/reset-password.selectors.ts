import {createFeatureSelector, createSelector} from '@ngrx/store';
import {fromResetPassword} from './reset-password.reducer';
import {ResetPasswordFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export const selectResetPasswordState = createFeatureSelector<fromResetPassword.IState>(
    fromResetPassword.resetPasswordFeatureKey,
);

export namespace ResetPasswordSelectors {
    export const selectEmail = createSelector(
        selectResetPasswordState,
        (state) => state[ResetPasswordFormEnum.EMAIL],
    );

    export const selectNewPassword = createSelector(
        selectResetPasswordState,
        (state) => state[ResetPasswordFormEnum.NEW_PASSWORD],
    );

    export const selectForm = createSelector(
        selectResetPasswordState,
        (state) => ({
            [ResetPasswordFormEnum.EMAIL]: state[ResetPasswordFormEnum.EMAIL],
            [ResetPasswordFormEnum.NEW_PASSWORD]: state[ResetPasswordFormEnum.NEW_PASSWORD],
        }),
    );
}
