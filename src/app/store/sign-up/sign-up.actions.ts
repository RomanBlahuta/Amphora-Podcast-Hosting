import {createAction, props} from '@ngrx/store';
import {SignUpFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export namespace SignUpActions {
    export const input = createAction(
        '[Sign Up] Input',
        props<{value: string; field: SignUpFormEnum}>(),
    );

    export const submit = createAction(
        '[Sign Up] Submit',
    );

    export const clear = createAction(
        '[Sign Up] Clear',
    );
}
