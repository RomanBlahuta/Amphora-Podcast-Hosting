import {createReducer, on} from '@ngrx/store';
import {UserActions} from './user.actions';

export namespace fromUser {
    export const userFeatureKey = 'user';

    export interface IState {
        email: string;
        first_name: string;
        last_name: string;
        verified: boolean;
    }

    export const initialState: IState = {
        email: null,
        first_name: null,
        last_name: null,
        verified: null,
    };

    export const reducer = createReducer(
        initialState,

        on(UserActions.loadUser, (state) => state),

        on(UserActions.loadUserSuccess, (state, {response}) => ({
            ...state,
            email: response.email,
            first_name: response.first_name,
            last_name: response.last_name,
            verified: response.is_verified,
        })),
    );
}
