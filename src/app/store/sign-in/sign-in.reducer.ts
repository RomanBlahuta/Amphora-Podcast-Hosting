import {createReducer, on} from '@ngrx/store';
import {SignInActions} from './sign-in.actions';
import {SignInFormEnum} from '../../shared/enums/forms/sign-in-form.enum';

export namespace fromSignIn {
    export const signInFeatureKey = 'sign-in';

    export interface IState {
        [SignInFormEnum.EMAIL]: string;
        [SignInFormEnum.PASSWORD]: string;
    }

    export const initialState: IState = {
        [SignInFormEnum.EMAIL]: '',
        [SignInFormEnum.PASSWORD]: '',
    };

    export const reducer = createReducer(
        initialState,

        on(SignInActions.input, (state, {value, field}) => ({
            ...state,
            [field]: value,
        })),

        on(SignInActions.submit, (state) => state),
    );
}
