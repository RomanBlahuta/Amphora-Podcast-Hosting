import {createAction, props} from '@ngrx/store';
import {SignUpFormEnum} from '../../shared/enums/forms/auth-forms.enum';
import {SignUpResponseDTO, RequestVerificationResponseDTO} from '../../services/http/auth/auth.dto';

export namespace SignUpActions {
    export const input = createAction(
        '[Sign Up] Input',
        props<{value: string; field: SignUpFormEnum}>(),
    );

    export const submit = createAction(
        '[Sign Up] Submit',
    );

    export const submitSuccess = createAction(
        '[Sign Up] Submit Success',
        props<{response: SignUpResponseDTO}>(),
    );

    export const submitFailure = createAction(
        '[Sign Up] Submit Failure',
    );

    export const clear = createAction(
        '[Sign Up] Clear',
    );

    export const requestVerificationToken = createAction(
        '[Sign Up] Request Verification Token',
    );

    export const requestVerificationTokenSuccess = createAction(
        '[Sign Up] Request Verification Token Success',
        props<{response: RequestVerificationResponseDTO}>()
    );

    export const requestVerificationTokenFailure = createAction(
        '[Sign Up] Request Verification Token Failure',
    );
}
