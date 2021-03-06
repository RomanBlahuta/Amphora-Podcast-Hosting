import {fromShowCreateEdit} from './show-create-edit.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ShowCreateFormEnum} from '../../shared/enums/forms/show-create-form.enum';
import {StreamingIntegrationsEnum} from '../../shared/enums/streaming-integrations.enum';
import {SERIES_COUNT_LIMIT} from '../../shared/utils/constants';

export const selectShowCreateEditState = createFeatureSelector<fromShowCreateEdit.IState>(
    fromShowCreateEdit.showCreateEditFeatureKey,
);

export namespace ShowCreateEditSelectors {
    export const selectTitle = createSelector(
        selectShowCreateEditState,
        (state) => state[ShowCreateFormEnum.TITLE],
    );

    export const selectSeriesTitle = createSelector(
        selectShowCreateEditState,
        (state) => state[ShowCreateFormEnum.SERIES_TITLE],
    );

    export const selectAllSeries = createSelector(
        selectShowCreateEditState,
        (state) => state.series,
    );

    export const selectDescription = createSelector(
        selectShowCreateEditState,
        (state) => state[ShowCreateFormEnum.DESCRIPTION],
    );

    export const selectIsButtonDisabled = createSelector(
        selectShowCreateEditState,
        (state) => state[ShowCreateFormEnum.TITLE] === '' || state[ShowCreateFormEnum.DESCRIPTION] === '',
    );

    export const selectImage = createSelector(
        selectShowCreateEditState,
        (state) => state[ShowCreateFormEnum.IMAGE],
    );

    export const selectImageUrl = createSelector(
        selectShowCreateEditState,
        (state) => state.imageUrl,
    );

    export const selectIsStreamingOptionSelected = createSelector(
        selectShowCreateEditState,
        (state, option: StreamingIntegrationsEnum) => !state[ShowCreateFormEnum.STREAMING_OPTIONS].includes(option),
    );

    export const selectImageFileName = createSelector(
        selectShowCreateEditState,
        (state) => state.imageFileName,
    );

    export const selectShowId = createSelector(
        selectShowCreateEditState,
        (state) => state.id,
    );

    export const selectFormMode = createSelector(
        selectShowCreateEditState,
        (state) => state.mode,
    );

    export const selectIsSeriesButtonDisabled = createSelector(
        selectShowCreateEditState,
        (state) => state[ShowCreateFormEnum.SERIES_TITLE] === '' || state.series.length > SERIES_COUNT_LIMIT,
    );

    export const selectForm = createSelector(
        selectShowCreateEditState,
        (state) => ({
            title: state[ShowCreateFormEnum.TITLE],
            description: state[ShowCreateFormEnum.DESCRIPTION],
            language: 'en',
            show_copyright: '',
            image: state.imageId,
            category: 'Arts/Books',
            series: state.series,
            selected_streamings: state[ShowCreateFormEnum.STREAMING_OPTIONS],
        }),
    );
}
