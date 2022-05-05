import {ActionReducer, ActionReducerMap, INIT, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import {AppActions} from './app/app.actions';
import {fromLanding} from './landing/landing.reducer';

export const routerFeatureKey = 'router';

export interface State {
  [routerFeatureKey]: RouterReducerState;
  [fromLanding.landingFeatureKey]: fromLanding.IState;
}

export const appReducers: ActionReducerMap<State> = {
  [routerFeatureKey]: routerReducer,
  [fromLanding.landingFeatureKey]: fromLanding.reducer,
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
