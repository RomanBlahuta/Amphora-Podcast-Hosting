import {createReducer, on} from '@ngrx/store';
import {DashboardActions} from './dashboard.actions';
import {IPaginationState} from '../../shared/interfaces/state/pagination-state.interface';

export namespace fromDashboard {
    export const dashboardFeatureKey = 'dashboard';

    export interface IState {
        searchValue: string;
        shows: any[];
        pagination: IPaginationState;
    }

    // todo: empty and fill after request, move min to reducer
    export const initialState: IState = {
        shows: [],
        searchValue: '',
        pagination: {
            currentPage: 2,
            totalPages: 5,
            displayedIndexes: [...Array(Math.min(5, 5)).keys()],
        }
    };

    export const reducer = createReducer(
        initialState,

        on(DashboardActions.loadShows, (state) => state),
        on(DashboardActions.loadShowsSuccess, (state, {shows}) => ({
            ...state,
            shows,
        })),
        on(DashboardActions.loadShowsFailure, (state) => state),
        on(DashboardActions.search, (state, {value}) => ({
            ...state,
            searchValue: value,
        })),
        on(DashboardActions.changePage, (state, {index}) => ({
            ...state,
            pagination: {
                ...state.pagination,
                currentPage: index,
            },
        })),
    );
}
