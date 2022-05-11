import {createReducer, on} from '@ngrx/store';
import {SignUpActions} from './sign-up.actions';
import {SignUpFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export namespace fromSignUp {
    export const signUpFeatureKey = 'signUp';

    export interface IState {
        [SignUpFormEnum.EMAIL]: string;
        [SignUpFormEnum.USERNAME]: string;
        [SignUpFormEnum.PASSWORD]: string;
        [SignUpFormEnum.REPEAT_PASSWORD]: string;
    }

    export const initialState: IState = {
        [SignUpFormEnum.USERNAME]: '',
        [SignUpFormEnum.EMAIL]: '',
        [SignUpFormEnum.PASSWORD]: '',
        [SignUpFormEnum.REPEAT_PASSWORD]: '',
    };

    export const reducer = createReducer(
        initialState,

        on(SignUpActions.input, (state, {value, field}) => ({
            ...state,
            [field]: value,
        })),

        on(SignUpActions.submit, (state) => state),

        on(SignUpActions.clear, (state) => initialState),
    );
}
