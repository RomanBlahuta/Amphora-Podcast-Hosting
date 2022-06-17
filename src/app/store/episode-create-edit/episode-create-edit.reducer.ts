import {createReducer, on} from '@ngrx/store';
import {EpisodeCreateEditActions} from './episode-create-edit.actions';
import {EpisodeCreateFormEnum} from '../../shared/enums/forms/episode-create-form.enum';
import {EpisodeTypesEnum} from '../../shared/enums/episode-types.enum';

export namespace fromEpisodeCreateEdit {
    export const episodeCreateEditFeatureKey = 'episodeCreateEdit';

    export interface IState {
        mode: string;
        id: string;
        showId: string;
        [EpisodeCreateFormEnum.TITLE]: string;
        [EpisodeCreateFormEnum.DESCRIPTION]: string;
        [EpisodeCreateFormEnum.SERIES]: string;
        [EpisodeCreateFormEnum.SEASON_NUMBER]: string;
        [EpisodeCreateFormEnum.EPISODE_NUMBER]: string;
        [EpisodeCreateFormEnum.EPISODE_TYPE]: EpisodeTypesEnum;
        [EpisodeCreateFormEnum.AUDIO]: File;
        [EpisodeCreateFormEnum.IMAGE]: File;
        seriesOptions: string[];
        imageId: string;
        audioUrl: string;
        audioFileName: string;
        imageUrl: string;
        imageFileName: string;
    }

    export const initialState: IState = {
        mode: null,
        id: null,
        showId: null,
        [EpisodeCreateFormEnum.TITLE]: '',
        [EpisodeCreateFormEnum.DESCRIPTION]: '',
        [EpisodeCreateFormEnum.SERIES]: '',
        [EpisodeCreateFormEnum.SEASON_NUMBER]: null,
        [EpisodeCreateFormEnum.EPISODE_NUMBER]: null,
        [EpisodeCreateFormEnum.EPISODE_TYPE]: EpisodeTypesEnum.FULL,
        [EpisodeCreateFormEnum.AUDIO]: null,
        [EpisodeCreateFormEnum.IMAGE]: null,
        seriesOptions: [],
        imageId: null,
        audioUrl: null,
        audioFileName: null,
        imageUrl: null,
        imageFileName: null,
    };

    export const reducer = createReducer(
        initialState,

        on(EpisodeCreateEditActions.setFormMode, (state, {mode, showId, episodeId}) => ({
            ...state,
            mode,
            id: episodeId,
            showId,
        })),

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

        on(EpisodeCreateEditActions.createAudio, (state, {file, url, fileName}) => ({
            ...state,
            [EpisodeCreateFormEnum.AUDIO]: file,
            audioUrl: url,
            audioFileName: fileName,
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
