import {createFeatureSelector, createSelector} from '@ngrx/store';
import {fromSignUp} from './sign-up.reducer';
import {SignUpFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export const selectSignUpState = createFeatureSelector<fromSignUp.IState>(
    fromSignUp.signUpFeatureKey,
);

export namespace SignUpSelectors {
    export const selectEmail = createSelector(
        selectSignUpState,
        (state) => state[SignUpFormEnum.EMAIL],
    );

    export const selectFirstName = createSelector(
        selectSignUpState,
        (state) => state[SignUpFormEnum.FIRST_NAME],
    );

    export const selectLastName = createSelector(
        selectSignUpState,
        (state) => state[SignUpFormEnum.LAST_NAME],
    );

    export const selectPassword = createSelector(
        selectSignUpState,
        (state) => state[SignUpFormEnum.PASSWORD],
    );

    export const selectRepeatPassword = createSelector(
        selectSignUpState,
        (state) => state[SignUpFormEnum.REPEAT_PASSWORD],
    );

    export const selectIsButtonDisabled = createSelector(
        selectSignUpState,
        (state) => !state.valid,
    );

    export const selectForm = createSelector(
        selectSignUpState,
        (state) => ({
            [SignUpFormEnum.FIRST_NAME]: state[SignUpFormEnum.FIRST_NAME],
            [SignUpFormEnum.LAST_NAME]: state[SignUpFormEnum.LAST_NAME],
            [SignUpFormEnum.EMAIL]: state[SignUpFormEnum.EMAIL],
            [SignUpFormEnum.PASSWORD]: state[SignUpFormEnum.PASSWORD],
        }),
    );
}
