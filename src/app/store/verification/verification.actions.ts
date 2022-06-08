import {createAction, props} from '@ngrx/store';
import {IRequestVerificationResponseDTO} from '../../services/http/auth/auth.dto';

export namespace VerificationActions {
    export const input = createAction(
        '[Verification] Input',
        props<{value: string}>(),
    );

    export const setValidity = createAction(
        '[Verification] Set Validity',
        props<{valid: boolean}>(),
    );

    export const submit = createAction(
        '[Verification] Submit',
    );

    export const submitSuccess = createAction(
        '[Verification] Submit Success',
        props<{response: IRequestVerificationResponseDTO}>(),
    );

    export const submitFailure = createAction(
        '[Verification] Submit Failure',
    );

    export const clear = createAction(
        '[Verification] Clear',
    );
}
