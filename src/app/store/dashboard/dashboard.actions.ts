import {createAction, props} from '@ngrx/store';

export namespace DashboardActions {
    export const loadShows = createAction(
        '[Dashboard] Load Shows',
    );

    export const loadShowsSuccess = createAction(
        '[Dashboard] Load Shows Success',
        props<{shows: any[]}>(),
    );

    export const loadShowsFailure = createAction(
        '[Dashboard] Load Shows Failure',
    );

    export const search = createAction(
        '[Dashboard] Search',
        props<{value: string}>(),
    );

    export const changePage = createAction(
        '[Dashboard] Change Page',
        props<{index: number}>(),
    );
}
