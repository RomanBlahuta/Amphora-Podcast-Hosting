import {fromEpisodeCreateEdit} from './episode-create-edit.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {EpisodeCreateFormEnum} from '../../shared/enums/forms/episode-create-form.enum';
import {FormModeEnum} from '../../shared/enums/forms/form-mode.enum';

export const selectEpisodeCreateEditState = createFeatureSelector<fromEpisodeCreateEdit.IState>(
    fromEpisodeCreateEdit.episodeCreateEditFeatureKey,
);

export namespace EpisodeCreateEditSelectors {
    export const selectTitle = createSelector(
        selectEpisodeCreateEditState,
        (state) => state[EpisodeCreateFormEnum.TITLE],
    );

    export const selectEpisodeId = createSelector(
        selectEpisodeCreateEditState,
        (state) => state.id,
    );

    export const selectFormMode = createSelector(
        selectEpisodeCreateEditState,
        (state) => state.mode,
    );

    export const selectAllSeries = createSelector(
        selectEpisodeCreateEditState,
        (state) => state.seriesOptions,
    );

    export const selectIsSeriesActive = createSelector(
        selectEpisodeCreateEditState,
        (state, series: string) => state[EpisodeCreateFormEnum.SERIES] === series,
    );

    export const selectShowId = createSelector(
        selectEpisodeCreateEditState,
        (state) => state.showId,
    );

    export const selectSeries = createSelector(
        selectEpisodeCreateEditState,
        (state) => state.series,
    );

    export const selectAudioUrl = createSelector(
        selectEpisodeCreateEditState,
        (state) => state.audioUrl,
    );

    export const selectEpisodeType = createSelector(
        selectEpisodeCreateEditState,
        (state) => state[EpisodeCreateFormEnum.EPISODE_TYPE],
    );

    export const selectSeasonNumber = createSelector(
        selectEpisodeCreateEditState,
        (state) => state[EpisodeCreateFormEnum.SEASON_NUMBER],
    );

    export const selectEpisodeNumber = createSelector(
        selectEpisodeCreateEditState,
        (state) => state[EpisodeCreateFormEnum.EPISODE_NUMBER],
    );

    export const selectDescription = createSelector(
        selectEpisodeCreateEditState,
        (state) => state[EpisodeCreateFormEnum.DESCRIPTION],
    );

    export const selectCanClearAudio = createSelector(
        selectEpisodeCreateEditState,
        (state) => state.audioUrl && state.mode === FormModeEnum.CREATE,
    );

    export const selectIsButtonDisabled = createSelector(
        selectEpisodeCreateEditState,
        (state) => {
            // todo remove comments
            // console.log((state[EpisodeCreateFormEnum.TITLE] === '' ||
            //     state[EpisodeCreateFormEnum.DESCRIPTION] === '' ||
            //     !state.imageId || (!state.audioFileLink || (state.mode === FormModeEnum.EDIT)) ||
            //     state[EpisodeCreateFormEnum.EPISODE_NUMBER] === '' ||
            //     state[EpisodeCreateFormEnum.SEASON_NUMBER] === ''));

            return (state[EpisodeCreateFormEnum.TITLE] === '' ||
                state[EpisodeCreateFormEnum.DESCRIPTION] === '' ||
                !state.imageId || (!state.audioFileLink && (state.mode !== FormModeEnum.EDIT)) ||
                state[EpisodeCreateFormEnum.EPISODE_NUMBER] === '' ||
                state[EpisodeCreateFormEnum.SEASON_NUMBER] === '');
        },
    );

    export const selectImage = createSelector(
        selectEpisodeCreateEditState,
        (state) => state[EpisodeCreateFormEnum.IMAGE],
    );

    export const selectImageUrl = createSelector(
        selectEpisodeCreateEditState,
        (state) => state.imageUrl,
    );

    export const selectImageFileName = createSelector(
        selectEpisodeCreateEditState,
        (state) => state.imageFileName,
    );

    export const selectAudioFileName = createSelector(
        selectEpisodeCreateEditState,
        (state) => state.audioFileName,
    );

    export const selectAudioFile = createSelector(
        selectEpisodeCreateEditState,
        (state) => state[EpisodeCreateFormEnum.AUDIO],
    );

    export const selectForm = createSelector(
        selectEpisodeCreateEditState,
        (state) => ({
            title: state[EpisodeCreateFormEnum.TITLE],
            description: state[EpisodeCreateFormEnum.DESCRIPTION],
            episode_num: +state[EpisodeCreateFormEnum.EPISODE_NUMBER],
            season_num: +state[EpisodeCreateFormEnum.SEASON_NUMBER],
            explicit: false,
            episode_type: state[EpisodeCreateFormEnum.EPISODE_TYPE],
            show_id: state.showId,
            series: state[EpisodeCreateFormEnum.SERIES],
            file_link: state.audioFileLink,
            duration: +state.audioDuration,
            cover_image: state.imageId,
            cover_link: state.imageFileLink,
        }),
    );
}
