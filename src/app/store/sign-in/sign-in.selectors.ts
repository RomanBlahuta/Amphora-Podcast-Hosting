import {createFeatureSelector, createSelector} from '@ngrx/store';
import {fromSignIn} from './sign-in.reducer';
import {SignInFormEnum} from '../../shared/enums/forms/sign-in-form.enum';

export const selectSignInState = createFeatureSelector<fromSignIn.IState>(
    fromSignIn.signInFeatureKey,
);

export namespace SignInSelectors {
    export const selectEmail = createSelector(
        selectSignInState,
        (state) => state[SignInFormEnum.EMAIL],
    );

    export const selectPassword = createSelector(
        selectSignInState,
        (state) => state[SignInFormEnum.PASSWORD],
    );

    export const selectForm = createSelector(
        selectSignInState,
        (state) => ({
            [SignInFormEnum.EMAIL]: state[SignInFormEnum.EMAIL],
            [SignInFormEnum.PASSWORD]: state[SignInFormEnum.PASSWORD],
        }),
    );
}
