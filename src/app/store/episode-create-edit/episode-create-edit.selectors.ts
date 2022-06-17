import {fromEpisodeCreateEdit} from './episode-create-edit.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {EpisodeCreateFormEnum} from '../../shared/enums/forms/episode-create-form.enum';

export const selectEpisodeCreateEditState = createFeatureSelector<fromEpisodeCreateEdit.IState>(
    fromEpisodeCreateEdit.episodeCreateEditFeatureKey,
);

export namespace EpisodeCreateEditSelectors {
    export const selectTitle = createSelector(
        selectEpisodeCreateEditState,
        (state) => state[EpisodeCreateFormEnum.TITLE],
    );

    export const selectAllSeries = createSelector(
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

    export const selectIsButtonDisabled = createSelector(
        selectEpisodeCreateEditState,
        // todo
        (state) => state[EpisodeCreateFormEnum.TITLE] === '' || state[EpisodeCreateFormEnum.DESCRIPTION] === '',
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

    export const selectForm = createSelector(
        selectEpisodeCreateEditState,
        (state) => ({
            //todo

            // title: state[EpisodeCreateFormEnum.TITLE],
            // description: state[EpisodeCreateFormEnum.DESCRIPTION],
            // language: 'en',
            // show_copyright: '',
            // image_id: state.imageId,
            // category: 'Arts/Books',
            // series: state.series,
            // selected_streamings: state[EpisodeCreateFormEnum.STREAMING_OPTIONS],
        }),
    );
}
