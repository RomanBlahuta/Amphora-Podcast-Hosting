import {createAction, props} from '@ngrx/store';
import {ILoadShowResponseDTO} from '../../services/http/show/show.dto';

export namespace ShowActions {
    export const changePage = createAction(
        '[Show] Change Page',
        props<{index: number}>(),
    );

    export const setActiveSeries = createAction(
        '[Show] Set Active Series',
        props<{id: string}>(),
    );

    export const loadShow = createAction(
        '[Show] Load Show',
        props<{id: string}>(),
    );

    export const loadShowSuccess = createAction(
        '[Show] Load Show Success',
        props<{show: ILoadShowResponseDTO}>(),
    );

    export const loadShowFailure = createAction(
        '[Show] Load Show Failure',
    );
}
