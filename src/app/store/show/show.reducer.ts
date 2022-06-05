import {createReducer, on} from '@ngrx/store';
import {ShowActions} from './show.actions';
import {IPaginationState} from '../../shared/interfaces/state/pagination-state.interface';
import {ILoadShowResponseDTO} from '../../services/http/show/show.dto';

export namespace fromShow {
    export const showFeatureKey = 'show';

    export interface IState {
        id: string;
        show: ILoadShowResponseDTO;
        searchValue: string;
        episodes: any[];
        pagination: IPaginationState;
        activeSeries: string;
    }

    // todo: empty and fill after request, move min to reducer
    export const initialState: IState = {
        id: null,
        show: null,
        episodes: [],
        searchValue: '',
        pagination: {
            currentPage: 1,
            totalPages: 1,
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
        on(ShowActions.loadShow, (state, {id}) => ({
            ...state,
            id,
        })),
        on(ShowActions.loadShowSuccess, (state, {show}) => ({
            ...state,
            show,
        })),
    );
}
