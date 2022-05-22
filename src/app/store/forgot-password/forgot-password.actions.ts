import {createAction, props} from '@ngrx/store';
import {ForgotPasswordFormEnum} from '../../shared/enums/forms/auth-forms.enum';
import {IForgotPasswordResponseDTO} from '../../services/http/auth/auth.dto';

export namespace ForgotPasswordActions {
    export const input = createAction(
        '[Forgot Password] Input',
        props<{value: string; field: ForgotPasswordFormEnum}>(),
    );

    export const submit = createAction(
        '[Forgot Password] Submit',
    );

    export const submitSuccess = createAction(
        '[Forgot Password] Submit Success',
        props<{response: IForgotPasswordResponseDTO}>(),
    );

    export const submitFailure = createAction(
        '[Forgot Password] Submit Failure',
    );

    export const clear = createAction(
        '[Forgot Password] Clear',
    );
}
