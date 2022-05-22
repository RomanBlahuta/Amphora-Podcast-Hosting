import {createAction, props} from '@ngrx/store';
import {ILoadUserResponseDto} from '../../services/http/user/user.dto';

export namespace UserActions {
    export const loadUser = createAction(
        '[Verification] Load User',
    );

    export const loadUserSuccess = createAction(
        '[Verification] Load User Success',
        props<{response: ILoadUserResponseDto}>(),
    );

    export const loadUserFailure = createAction(
        '[Verification] Load User Failure',
    );
}
