import {createReducer, on} from '@ngrx/store';
import {DashboardActions} from './dashboard.actions';
import {IPaginationState} from '../../shared/interfaces/state/pagination-state.interface';
import {ILoadPaginatedShowsResponseItemDTO} from '../../services/http/show/show.dto';
import {MAX_PAGINATION_PAGES_PER_VIEW, SHOW_PAGE_SIZE} from '../../shared/utils/constants';

export namespace fromDashboard {
    export const dashboardFeatureKey = 'dashboard';

    export interface IState {
        searchValue: string;
        shows: ILoadPaginatedShowsResponseItemDTO[];
        pagination: IPaginationState;
    }

    export const initialState: IState = {
        shows: [],
        searchValue: '',
        pagination: {
            currentPage: 1,
            totalPages: 1,
            displayedIndexes: [],
        }
    };

    export const reducer = createReducer(
        initialState,

        on(DashboardActions.loadShows, (state) => state),
        on(DashboardActions.loadShowsSuccess, (state, {shows}) => ({
            ...state,
            shows: shows.items.map(show => ({
                ...show,
                series: (show.series?.length) ? show.series : [],
            })),
            pagination: {
                ...state.pagination,
                totalPages: Math.ceil(shows.total/SHOW_PAGE_SIZE),
                displayedIndexes: state.pagination.currentPage > 1 ?
                    state.pagination.displayedIndexes
                    :
                    [...Array((Math.ceil(shows.total/SHOW_PAGE_SIZE) < 5) ?
                        Math.ceil(shows.total/SHOW_PAGE_SIZE)
                        :
                        MAX_PAGINATION_PAGES_PER_VIEW).keys()].map(page => page + 1),
            }
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
                displayedIndexes: (Math.max(...state.pagination.displayedIndexes) < index) ?
                    state.pagination.displayedIndexes.map(idx => idx + 1)
                    :
                    (Math.min(...state.pagination.displayedIndexes) > index) ?
                        state.pagination.displayedIndexes.map(idx => idx - 1)
                        :
                        state.pagination.displayedIndexes,
            },
        })),
    );
}
