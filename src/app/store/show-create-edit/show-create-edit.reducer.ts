import {createReducer, on} from '@ngrx/store';
import {ShowCreateEditActions} from './show-create-edit.actions';

export namespace fromShowCreateEdit {
    export const showCreateEditFeatureKey = 'show-create-edit';

    export interface IState {
    }

    export const initialState: IState = {
    };

    export const reducer = createReducer(
        initialState,

        on(ShowCreateEditActions.clear, (state) => initialState),
    );
}
