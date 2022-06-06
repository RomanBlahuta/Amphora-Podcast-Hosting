import {createAction, props} from '@ngrx/store';
import {ILoadUserResponseDto} from '../../services/http/user/user.dto';

export namespace UserActions {
    export const loadUser = createAction(
        '[User] Load User',
    );

    export const loadUserSuccess = createAction(
        '[User] Load User Success',
        props<{response: ILoadUserResponseDto}>(),
    );

    export const loadUserFailure = createAction(
        '[User] Load User Failure',
    );

    export const signOut = createAction(
        '[User] Sign Out',
    );

    export const signOutSuccess = createAction(
        '[User] Sign Out Success',
    );

    export const signOutFailure = createAction(
        '[User] Sign Out Failure',
    );
}
