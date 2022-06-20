import {createFeatureSelector, createSelector} from '@ngrx/store';
import {fromUser} from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.IState>(
    fromUser.userFeatureKey,
);

export namespace UserSelectors {
    export const selectEmail = createSelector(
        selectUserState,
        (state) => (state.email) ? state.email : 'Loading...',
    );

    export const selectIsUserUnverified = createSelector(
        selectUserState,
        (state) => !state.verified,
    );

    export const selectFirstName = createSelector(
        selectUserState,
        (state) => state.first_name,
    );

    export const selectLastName = createSelector(
        selectUserState,
        (state) => state.last_name,
    );

    export const selectFullName = createSelector(
        selectUserState,
        (state) => (state.first_name && state.last_name) ? `${state.first_name} ${state.last_name}` : 'Loading...',
    );
}
