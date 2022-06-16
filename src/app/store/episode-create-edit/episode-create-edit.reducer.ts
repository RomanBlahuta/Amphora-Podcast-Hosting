import {createReducer, on} from '@ngrx/store';
import {EpisodeCreateEditActions} from './episode-create-edit.actions';
import {EpisodeCreateFormEnum} from '../../shared/enums/forms/episode-create-form.enum';

export namespace fromEpisodeCreateEdit {
    export const episodeCreateEditFeatureKey = 'showCreateEdit';

    export interface IState {
        mode: string;
        id: string;
        [EpisodeCreateFormEnum.TITLE]: string;
        [EpisodeCreateFormEnum.DESCRIPTION]: string;
        [EpisodeCreateFormEnum.SERIES]: string;
        [EpisodeCreateFormEnum.SEASON_NUMBER]: number;
        [EpisodeCreateFormEnum.EPISODE_NUMBER]: number;
        [EpisodeCreateFormEnum.AUDIO]: File;
        [EpisodeCreateFormEnum.IMAGE]: File;
        seriesOptions: string[];
        imageId: string;
        imageUrl: string;
        imageFileName: string;
    }

    export const initialState: IState = {
        mode: null,
        id: null,
        [EpisodeCreateFormEnum.TITLE]: '',
        [EpisodeCreateFormEnum.DESCRIPTION]: '',
        [EpisodeCreateFormEnum.SERIES]: '',
        [EpisodeCreateFormEnum.SEASON_NUMBER]: null,
        [EpisodeCreateFormEnum.EPISODE_NUMBER]: null,
        [EpisodeCreateFormEnum.AUDIO]: null,
        [EpisodeCreateFormEnum.IMAGE]: null,
        seriesOptions: [],
        imageId: null,
        imageUrl: null,
        imageFileName: null,
    };

    export const reducer = createReducer(
        initialState,

        on(EpisodeCreateEditActions.input, (state, {value, field}) => ({
            ...state,
            [field]: value,
        })),

        on(EpisodeCreateEditActions.createImage, (state, {file, url, fileName}) => ({
            ...state,
            [EpisodeCreateFormEnum.IMAGE]: file,
            imageUrl: url,
            imageFileName: fileName,
        })),

        on(EpisodeCreateEditActions.createImageSuccess, (state, {response}) => ({
            ...state,
            imageId: response.id,
        })),

        on(EpisodeCreateEditActions.addSeries, (state) => ({
            ...state,
        })),

        on(EpisodeCreateEditActions.removeSeries, (state, {series}) => ({
            ...state,
        })),

        on(EpisodeCreateEditActions.selectStreamingOption, (state, {option}) => ({
            ...state,
        })),

        on(EpisodeCreateEditActions.clear, (state) => initialState),
    );
}
