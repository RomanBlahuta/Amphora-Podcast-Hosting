import {createReducer, on} from '@ngrx/store';
import {SignUpActions} from './sign-up.actions';
import {SignUpFormEnum} from '../../shared/enums/forms/auth-forms.enum';

export namespace fromSignUp {
    export const signUpFeatureKey = 'signUp';

    export interface IState {
        [SignUpFormEnum.EMAIL]: string;
        [SignUpFormEnum.FIRST_NAME]: string;
        [SignUpFormEnum.LAST_NAME]: string;
        [SignUpFormEnum.PASSWORD]: string;
        [SignUpFormEnum.REPEAT_PASSWORD]: string;
    }

    export const initialState: IState = {
        [SignUpFormEnum.FIRST_NAME]: '',
        [SignUpFormEnum.LAST_NAME]: '',
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
