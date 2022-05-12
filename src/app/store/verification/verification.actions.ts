import {createAction, props} from '@ngrx/store';

export namespace VerificationActions {
    export const input = createAction(
        '[Verification] Input',
        props<{value: string}>(),
    );

    export const submit = createAction(
        '[Verification] Submit',
    );

    export const clear = createAction(
        '[Verification] Clear',
    );
}
