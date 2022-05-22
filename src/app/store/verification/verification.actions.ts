import {createAction, props} from '@ngrx/store';
import {RequestVerificationResponseDTO} from '../../services/http/auth/auth.dto';

export namespace VerificationActions {
    export const input = createAction(
        '[Verification] Input',
        props<{value: string}>(),
    );

    export const submit = createAction(
        '[Verification] Submit',
    );

    export const submitSuccess = createAction(
        '[Verification] Submit Success',
        props<{response: RequestVerificationResponseDTO}>(),
    );

    export const submitFailure = createAction(
        '[Verification] Submit Failure',
    );

    export const clear = createAction(
        '[Verification] Clear',
    );
}
