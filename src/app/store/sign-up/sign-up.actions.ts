import {createAction, props} from '@ngrx/store';
import {SignUpFormEnum} from '../../shared/enums/forms/auth-forms.enum';
import {SignUpResponseDTO} from '../../services/http/auth/auth.dto';

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
}
