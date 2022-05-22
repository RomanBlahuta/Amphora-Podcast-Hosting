import {createAction, props} from '@ngrx/store';
import {ResetPasswordFormEnum} from '../../shared/enums/forms/auth-forms.enum';
import {ResetPasswordResponseDTO} from '../../services/http/auth/auth.dto';

export namespace ResetPasswordActions {
    export const input = createAction(
        '[Reset Password] Input',
        props<{value: string; field: ResetPasswordFormEnum}>(),
    );

    export const submit = createAction(
        '[Reset Password] Submit',
    );

    export const submitSuccess = createAction(
        '[Reset Password] Submit Success',
        props<{response: ResetPasswordResponseDTO}>(),
    );

    export const submitFailure = createAction(
        '[Reset Password] Submit Failure',
    );

    export const clear = createAction(
        '[Reset Password] Clear',
    );
}
