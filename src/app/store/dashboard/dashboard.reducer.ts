import {createReducer, on} from '@ngrx/store';
import {DashboardActions} from './dashboard.actions';

export namespace fromDashboard {
    export const dashboardFeatureKey = 'dashboard';

    export interface IState {
        searchValue: string;
        shows: any[];
        currentPage: number;
        totalPages: number;
    }

    export const initialState: IState = {
        shows: [],
        searchValue: '',
        currentPage: 1,
        totalPages: 1,
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
            currentPage: index,
        })),
    );
}
