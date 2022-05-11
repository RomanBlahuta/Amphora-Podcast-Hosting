import {ActionReducer, ActionReducerMap, INIT, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import {AppActions} from './app/app.actions';
import {fromLanding} from './landing/landing.reducer';
import {fromSignIn} from './sign-in/sign-in.reducer';
import {fromSignUp} from './sign-up/sign-up.reducer';
import {fromResetPassword} from './reset-password/reset-password.reducer';

export const routerFeatureKey = 'router';

export interface State {
    [routerFeatureKey]: RouterReducerState;
    [fromLanding.landingFeatureKey]: fromLanding.IState;
    [fromSignIn.signInFeatureKey]: fromSignIn.IState;
    [fromSignUp.signUpFeatureKey]: fromSignUp.IState;
    [fromResetPassword.resetPasswordFeatureKey]: fromResetPassword.IState;
}

export const appReducers: ActionReducerMap<State> = {
    [routerFeatureKey]: routerReducer,
    [fromLanding.landingFeatureKey]: fromLanding.reducer,
    [fromSignIn.signInFeatureKey]: fromSignIn.reducer,
    [fromSignUp.signUpFeatureKey]: fromSignUp.reducer,
    [fromResetPassword.resetPasswordFeatureKey]: fromResetPassword.reducer,
};

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function restoreState(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const currentActionType = action.type;
    const actionsNeedRestoreState = [
      AppActions.clearState,
    ];

    if (actionsNeedRestoreState.find(item => item.type === currentActionType)) {
      return reducer(null, {type: INIT});
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [restoreState] : [restoreState];
