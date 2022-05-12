import {createFeatureSelector, createSelector} from '@ngrx/store';
import {fromVerification} from './verification.reducer';
import {VerificationFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export const selectVerificationState = createFeatureSelector<fromVerification.IState>(
    fromVerification.verificationFeatureKey,
);

export namespace VerificationSelectors {
    export const selectVerificationCode = createSelector(
        selectVerificationState,
        (state) => state[VerificationFormEnum.VERIFICATION_CODE],
    );

    export const selectForm = createSelector(
        selectVerificationState,
        (state) => ({
            [VerificationFormEnum.VERIFICATION_CODE]: state[VerificationFormEnum.VERIFICATION_CODE],
        }),
    );
}
