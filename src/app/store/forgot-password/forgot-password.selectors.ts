import {createFeatureSelector, createSelector} from '@ngrx/store';
import {fromForgotPassword} from './forgot-password.reducer';
import {ForgotPasswordFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export const selectForgotPasswordState = createFeatureSelector<fromForgotPassword.IState>(
    fromForgotPassword.forgotPasswordFeatureKey,
);

export namespace ForgotPasswordSelectors {
    export const selectEmail = createSelector(
        selectForgotPasswordState,
        (state) => state[ForgotPasswordFormEnum.EMAIL],
    );

    export const selectIsLoading = createSelector(
        selectForgotPasswordState,
        (state) => state.isLoading,
    );

    export const selectIsButtonDisabled = createSelector(
        selectForgotPasswordState,
        (state) => !state.valid,
    );

    export const selectForm = createSelector(
        selectForgotPasswordState,
        (state) => ({
            [ForgotPasswordFormEnum.EMAIL]: state[ForgotPasswordFormEnum.EMAIL],
        }),
    );
}
