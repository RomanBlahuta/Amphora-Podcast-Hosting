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

    export const selectUsername = createSelector(
        selectSignUpState,
        (state) => state[SignUpFormEnum.USERNAME],
    );

    export const selectPassword = createSelector(
        selectSignUpState,
        (state) => state[SignUpFormEnum.PASSWORD],
    );

    export const selectRepeatPassword = createSelector(
        selectSignUpState,
        (state) => state[SignUpFormEnum.REPEAT_PASSWORD],
    );

    export const selectForm = createSelector(
        selectSignUpState,
        (state) => ({
            [SignUpFormEnum.USERNAME]: state[SignUpFormEnum.USERNAME],
            [SignUpFormEnum.EMAIL]: state[SignUpFormEnum.EMAIL],
            [SignUpFormEnum.PASSWORD]: state[SignUpFormEnum.PASSWORD],
            [SignUpFormEnum.REPEAT_PASSWORD]: state[SignUpFormEnum.PASSWORD],
        }),
    );
}
