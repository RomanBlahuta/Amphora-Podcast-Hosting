import {createAction, props} from '@ngrx/store';

export namespace ShowActions {
    export const changePage = createAction(
        '[Show] Change Page',
        props<{index: number}>(),
    );

    export const setActiveSeries = createAction(
        '[Show] Set Active Series',
        props<{id: number}>(),
    );
}
