import {createAction, props} from '@ngrx/store';
import {ResetPasswordFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export namespace ResetPasswordActions {
    export const input = createAction(
        '[Reset Password] Input',
        props<{value: string; field: ResetPasswordFormEnum}>(),
    );

    export const submit = createAction(
        '[Reset Password] Submit',
    );

    export const clear = createAction(
        '[Reset Password] Clear',
    );
}
