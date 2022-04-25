import {ActionReducer, ActionReducerMap, INIT, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {environment} from '../../environments/environment';

// TODO

export const routerFeatureKey = 'router';

export interface State {
  [routerFeatureKey]: RouterReducerState;
  // [fromLoader.loaderFeatureKey]: fromLoader.IState;
}

export const reducers: ActionReducerMap<State> = {
  [routerFeatureKey]: routerReducer,
  // [fromLoader.loaderFeatureKey]: fromLoader.reducer,
};

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function restoreState(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const currentActionType = action.type;
    const actionsNeedRestoreState = [
      // UserActions.clearAllState,
    ];

    if (actionsNeedRestoreState.find(item => item.type === currentActionType)) {
      return reducer(undefined, {type: INIT});
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [restoreState] : [restoreState];
