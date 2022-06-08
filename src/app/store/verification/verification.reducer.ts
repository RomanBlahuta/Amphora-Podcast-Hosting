import {createReducer, on} from '@ngrx/store';
import {VerificationActions} from './verification.actions';
import {VerificationFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export namespace fromVerification {
    export const verificationFeatureKey = 'verification';

    export interface IState {
        [VerificationFormEnum.VERIFICATION_CODE]: string;
        valid: boolean;
    }

    export const initialState: IState = {
        [VerificationFormEnum.VERIFICATION_CODE]: '',
        valid: false,
    };

    export const reducer = createReducer(
        initialState,

        on(VerificationActions.input, (state, {value}) => ({
            ...state,
            [VerificationFormEnum.VERIFICATION_CODE]: value,
        })),

        on(VerificationActions.setValidity, (state, {valid}) => ({
            ...state,
            valid,
        })),

        on(VerificationActions.submit, (state) => state),

        on(VerificationActions.clear, (state) => initialState),
    );
}
