import {createReducer, on} from '@ngrx/store';
import {ShowActions} from './show.actions';
import {IPaginationState} from '../../shared/interfaces/state/pagination-state.interface';
import {ILoadShowResponseDTO} from '../../services/http/show/show.dto';
import {ILoadEpisodesByShowIdResponseItemDto} from '../../services/http/episode/episode.dto';
import {MAX_PAGINATION_PAGES_PER_VIEW, EPISODE_PAGE_SIZE} from '../../shared/utils/constants';

export namespace fromShow {
    export const showFeatureKey = 'show';

    export interface IState {
        isLoading: boolean;
        areEpisodesLoading: boolean;
        id: string;
        show: ILoadShowResponseDTO;
        searchValue: string;
        episodes: ILoadEpisodesByShowIdResponseItemDto[];
        pagination: IPaginationState;
        activeSeries: string;
    }

    export const initialState: IState = {
        isLoading: false,
        areEpisodesLoading: false,
        id: null,
        show: null,
        episodes: [],
        searchValue: '',
        pagination: {
            currentPage: 1,
            totalPages: 1,
            displayedIndexes: [],
        },
        activeSeries: null,
    };

    export const reducer = createReducer(
        initialState,

        on(ShowActions.changePage, (state, {index}) => ({
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
        on(ShowActions.setActiveSeries, (state, {id}) => ({
            ...state,
            activeSeries: (state.activeSeries === id) ? null : id,
            pagination: {
                ...state.pagination,
                currentPage: 1,
            }
        })),
        on(ShowActions.search, (state, {value}) => ({
            ...state,
            searchValue: value,
            pagination: {
                ...state.pagination,
                currentPage: 1,
            },
        })),
        on(ShowActions.deleteEpisodeSuccess, (state) => ({
            ...state,
            pagination: {
                ...state.pagination,
                currentPage: 1,
            },
        })),
        on(ShowActions.loadShow, (state, {id}) => ({
            ...state,
            isLoading: true,
            id,
        })),
        on(ShowActions.loadShowSuccess, (state, {show}) => ({
            ...state,
            isLoading: false,
            show,
        })),
        on(ShowActions.loadShowEpisodes, (state) => ({
            ...state,
            areEpisodesLoading: true,
        })),
        on(ShowActions.loadShowEpisodesSuccess, (state, {episodes}) => ({
            ...state,
            areEpisodesLoading: false,
            episodes: episodes.items,
            pagination: {
                ...state.pagination,
                totalPages: Math.ceil(episodes.total/EPISODE_PAGE_SIZE),
                displayedIndexes: state.pagination.currentPage > 1 ?
                    state.pagination.displayedIndexes
                    :
                    [...Array((Math.ceil(episodes.total/EPISODE_PAGE_SIZE) < 5) ?
                        Math.ceil(episodes.total/EPISODE_PAGE_SIZE)
                        :
                        MAX_PAGINATION_PAGES_PER_VIEW).keys()].map(page => page + 1),
            }
        })),
    );
}
