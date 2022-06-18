import {createReducer, on} from '@ngrx/store';
import {EpisodeCreateEditActions} from './episode-create-edit.actions';
import {EpisodeCreateFormEnum} from '../../shared/enums/forms/episode-create-form.enum';
import {EpisodeTypesEnum} from '../../shared/enums/episode-types.enum';
import {FormModeEnum} from '../../shared/enums/forms/form-mode.enum';

export namespace fromEpisodeCreateEdit {
    export const episodeCreateEditFeatureKey = 'episodeCreateEdit';

    export interface IState {
        mode: FormModeEnum;
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
        imageFileLink: string;
        audioFileLink: string;
        audioDuration: string;
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
        imageFileLink: null,
        audioFileLink: null,
        audioDuration: null,
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

        on(EpisodeCreateEditActions.createAudioSuccess, (state, {response}) => ({
            ...state,
            audioDuration: response.episode_duration,
            audioFileLink: response.episode_link,
        })),

        on(EpisodeCreateEditActions.clearAudio, (state) => ({
            ...state,
            audioUrl: null,
            [EpisodeCreateFormEnum.AUDIO]: null,
            audioFileName: null,
            audioFileLink: null,
            audioDuration: null,
        })),

        on(EpisodeCreateEditActions.loadEpisodeForEditSuccess, (state, {response}) => ({
            ...state,
            [EpisodeCreateFormEnum.TITLE]: response.title,
            [EpisodeCreateFormEnum.DESCRIPTION]: response.description,
            [EpisodeCreateFormEnum.EPISODE_NUMBER]: `${response.episode_num}`,
            [EpisodeCreateFormEnum.SEASON_NUMBER]: `${response.season_num}`,
            [EpisodeCreateFormEnum.SERIES]: response.series,
            [EpisodeCreateFormEnum.EPISODE_TYPE]: response.episode_type,
            imageId: response.cover_image,
            imageUrl: response.cover_link,
            audioUrl: response.file_link,
            audioFileName: `S${response.season_num}E${response.episode_num}: ${response.title}`,
        })),

        on(EpisodeCreateEditActions.selectSeries, (state, {series}) => ({
            ...state,
            [EpisodeCreateFormEnum.SERIES]: series,
        })),

        on(EpisodeCreateEditActions.loadShowSeries, (state) => state),

        on(EpisodeCreateEditActions.loadShowSeriesSuccess, (state, {response}) => ({
            ...state,
            seriesOptions: response.map(seriesObj => seriesObj.name),
        })),

        on(EpisodeCreateEditActions.createImageSuccess, (state, {response}) => ({
            ...state,
            imageId: response.id,
            imageFileLink: response.file_url,
        })),

        on(EpisodeCreateEditActions.addSeries, (state) => ({
            ...state,
        })),

        on(EpisodeCreateEditActions.removeSeries, (state, {series}) => ({
            ...state,
        })),

        on(EpisodeCreateEditActions.clear, (state) => initialState),
    );
}
