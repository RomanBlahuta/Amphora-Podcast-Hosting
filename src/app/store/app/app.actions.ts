import {createAction} from '@ngrx/store';

export namespace AppActions {
    export const clearState = createAction(
        '[App] Clear State',
    );
}
