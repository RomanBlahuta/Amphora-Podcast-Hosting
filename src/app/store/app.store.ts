import {ActionReducer, ActionReducerMap, INIT, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import {AppActions} from './app/app.actions';
import {fromLanding} from './landing/landing.reducer';
import {fromSignIn} from './sign-in/sign-in.reducer';
import {fromSignUp} from './sign-up/sign-up.reducer';
import {fromForgotPassword} from './forgot-password/forgot-password.reducer';
import {fromVerification} from './verification/verification.reducer';
import {fromPopUp} from './pop-up/pop-up.reducer';
import {fromDashboard} from './dashboard/dashboard.reducer';
import {fromShow} from './show/show.reducer';
import {fromResetPassword} from './reset-password/reset-password.reducer';
import {fromUser} from './user/user.reducer';
import {fromShowCreateEdit} from './show-create-edit/show-create-edit.reducer';
import {fromEpisodeCreateEdit} from './episode-create-edit/episode-create-edit.reducer';

export const routerFeatureKey = 'router';

export interface State {
    [routerFeatureKey]: RouterReducerState;
    [fromLanding.landingFeatureKey]: fromLanding.IState;
    [fromSignIn.signInFeatureKey]: fromSignIn.IState;
    [fromSignUp.signUpFeatureKey]: fromSignUp.IState;
    [fromForgotPassword.forgotPasswordFeatureKey]: fromForgotPassword.IState;
    [fromResetPassword.resetPasswordFeatureKey]: fromResetPassword.IState;
    [fromVerification.verificationFeatureKey]: fromVerification.IState;
    [fromPopUp.popUpFeatureKey]: fromPopUp.IState;
    [fromDashboard.dashboardFeatureKey]: fromDashboard.IState;
    [fromShow.showFeatureKey]: fromShow.IState;
    [fromShowCreateEdit.showCreateEditFeatureKey]: fromShowCreateEdit.IState;
    [fromUser.userFeatureKey]: fromUser.IState;
    [fromEpisodeCreateEdit.episodeCreateEditFeatureKey]: fromEpisodeCreateEdit.IState;
}

export const appReducers: ActionReducerMap<State> = {
    [routerFeatureKey]: routerReducer,
    [fromLanding.landingFeatureKey]: fromLanding.reducer,
    [fromSignIn.signInFeatureKey]: fromSignIn.reducer,
    [fromSignUp.signUpFeatureKey]: fromSignUp.reducer,
    [fromForgotPassword.forgotPasswordFeatureKey]: fromForgotPassword.reducer,
    [fromResetPassword.resetPasswordFeatureKey]: fromResetPassword.reducer,
    [fromVerification.verificationFeatureKey]: fromVerification.reducer,
    [fromPopUp.popUpFeatureKey]: fromPopUp.reducer,
    [fromDashboard.dashboardFeatureKey]: fromDashboard.reducer,
    [fromShow.showFeatureKey]: fromShow.reducer,
    [fromShowCreateEdit.showCreateEditFeatureKey]: fromShowCreateEdit.reducer,
    [fromUser.userFeatureKey]: fromUser.reducer,
    [fromEpisodeCreateEdit.episodeCreateEditFeatureKey]: fromEpisodeCreateEdit.reducer,
};

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function restoreState(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const currentActionType = action.type;
    const actionsNeedRestoreState = [
      AppActions.clearState,
    ];

    if (actionsNeedRestoreState.find(item => item.type === currentActionType)) {
      return reducer(undefined, {type: INIT});
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [restoreState] : [restoreState];
