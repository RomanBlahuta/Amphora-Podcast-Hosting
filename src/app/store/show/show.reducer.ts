import {createReducer, on} from '@ngrx/store';
import {ShowActions} from './show.actions';
import {IPaginationState} from '../../shared/interfaces/state/pagination-state.interface';

export namespace fromShow {
    export const showFeatureKey = 'show';

    export interface IState {
        showId: number;
        show: any;
        searchValue: string;
        episodes: any[];
        pagination: IPaginationState;
        activeSeries: number;
    }

    // todo: empty and fill after request, move min to reducer
    export const initialState: IState = {
        showId: 0,
        show: {},
        episodes: [],
        searchValue: '',
        pagination: {
            currentPage: 2,
            totalPages: 5,
            displayedIndexes: [...Array(Math.min(5, 5)).keys()],
        },
        activeSeries: null,
    };

    export const reducer = createReducer(
        initialState,

        on(ShowActions.changePage, (state) => ({
            ...state,
        })),
        on(ShowActions.setActiveSeries, (state, {id}) => ({
            ...state,
            activeSeries: (state.activeSeries === id) ? null : id,
        })),
    );
}
