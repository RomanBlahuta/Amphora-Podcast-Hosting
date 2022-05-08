import {createAction, props} from '@ngrx/store';
import {SignInFormEnum} from '../../shared/enums/forms/sign-in-form.enum';

export namespace SignInActions {
    export const input = createAction(
        '[Sign In] Input',
        props<{value: string; field: SignInFormEnum}>(),
    );

    export const submit = createAction(
        '[Sign In] Submit',
    );
}
