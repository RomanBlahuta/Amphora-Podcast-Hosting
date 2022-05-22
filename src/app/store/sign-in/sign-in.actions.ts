import {createAction, props} from '@ngrx/store';
import {SignInFormEnum} from '../../shared/enums/forms/auth-forms.enum';
import {ISignInResponseDTO} from '../../services/http/auth/auth.dto';

export namespace SignInActions {
    export const input = createAction(
        '[Sign In] Input',
        props<{value: string; field: SignInFormEnum}>(),
    );

    export const submit = createAction(
        '[Sign In] Submit',
    );

    export const submitSuccess = createAction(
        '[Sign In] Submit Success',
        props<{response: ISignInResponseDTO}>(),
    );

    export const submitFailure = createAction(
        '[Sign In] Submit Failure',
    );

    export const clear = createAction(
        '[Sign In] Clear',
    );
}
