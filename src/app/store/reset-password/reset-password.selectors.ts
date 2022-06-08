import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ResetPasswordFormEnum} from '../../shared/enums/forms/auth-forms.enum';
import {fromResetPassword} from './reset-password.reducer';

export const selectResetPasswordState = createFeatureSelector<fromResetPassword.IState>(
    fromResetPassword.resetPasswordFeatureKey,
);

export namespace ResetPasswordSelectors {
    export const selectCode = createSelector(
        selectResetPasswordState,
        (state) => state[ResetPasswordFormEnum.CODE],
    );

    export const selectNewPassword = createSelector(
        selectResetPasswordState,
        (state) => state[ResetPasswordFormEnum.NEW_PASSWORD],
    );

    export const selectIsButtonDisabled = createSelector(
        selectResetPasswordState,
        (state) => !state.valid,
    );

    export const selectForm = createSelector(
        selectResetPasswordState,
        (state) => ({
            [ResetPasswordFormEnum.CODE]: state[ResetPasswordFormEnum.CODE],
            [ResetPasswordFormEnum.NEW_PASSWORD]: state[ResetPasswordFormEnum.NEW_PASSWORD],
        }),
    );
}
