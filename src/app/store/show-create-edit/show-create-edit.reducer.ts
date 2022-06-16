import {createReducer, on} from '@ngrx/store';
import {ShowCreateEditActions} from './show-create-edit.actions';
import {ShowCreateFormEnum} from '../../shared/enums/forms/show-create-form.enum';
import {removeItemFromArray} from '../../shared/utils/utils';
import {StreamingIntegrationsEnum} from '../../shared/enums/streaming-integrations.enum';
import {FormModeEnum} from '../../shared/enums/forms/form-mode.enum';

export namespace fromShowCreateEdit {
    export const showCreateEditFeatureKey = 'showCreateEdit';

    export interface IState {
        mode: FormModeEnum;
        id: string;
        [ShowCreateFormEnum.TITLE]: string;
        [ShowCreateFormEnum.STREAMING_OPTIONS]: StreamingIntegrationsEnum[];
        [ShowCreateFormEnum.DESCRIPTION]: string;
        [ShowCreateFormEnum.SERIES_TITLE]: string;
        [ShowCreateFormEnum.IMAGE]: File;
        series: string[];
        imageId: string;
        imageUrl: string;
        imageFileName: string;
    }

    export const initialState: IState = {
        mode: null,
        id: null,
        [ShowCreateFormEnum.TITLE]: '',
        [ShowCreateFormEnum.STREAMING_OPTIONS]: [],
        [ShowCreateFormEnum.DESCRIPTION]: '',
        [ShowCreateFormEnum.SERIES_TITLE]: '',
        [ShowCreateFormEnum.IMAGE]: null,
        series: [],
        imageId: null,
        imageUrl: null,
        imageFileName: null,
    };

    export const reducer = createReducer(
        initialState,

        on(ShowCreateEditActions.setFormMode, (state, {mode, id}) => ({
            ...state,
            mode,
            id,
        })),

        on(ShowCreateEditActions.loadShowForEdit, (state) => state),

        on(ShowCreateEditActions.loadShowForEditSuccess, (state, {response}) => ({
            ...state,
            id: response.id,
            [ShowCreateFormEnum.TITLE]: response.title,
            [ShowCreateFormEnum.DESCRIPTION]: response.description,
            [ShowCreateFormEnum.STREAMING_OPTIONS]: response.selected_streamings,
            series: response.series,
            imageUrl: response.media_link,
        })),

        on(ShowCreateEditActions.input, (state, {value, field}) => ({
            ...state,
            [field]: value,
        })),

        on(ShowCreateEditActions.createImage, (state, {file, url, fileName}) => ({
            ...state,
            [ShowCreateFormEnum.IMAGE]: file,
            imageUrl: url,
            imageFileName: fileName,
        })),

        on(ShowCreateEditActions.createImageSuccess, (state, {response}) => ({
            ...state,
            imageId: response.id,
        })),

        on(ShowCreateEditActions.addSeries, (state) => ({
            ...state,
            series: [...state.series, state[ShowCreateFormEnum.SERIES_TITLE]],
            [ShowCreateFormEnum.SERIES_TITLE]: '',
        })),

        on(ShowCreateEditActions.removeSeries, (state, {series}) => ({
            ...state,
            series: state.series.filter(element => element !== series),
        })),

        on(ShowCreateEditActions.selectStreamingOption, (state, {option}) => ({
            ...state,
            [ShowCreateFormEnum.STREAMING_OPTIONS]: state[ShowCreateFormEnum.STREAMING_OPTIONS].includes(option) ?
                removeItemFromArray([...state[ShowCreateFormEnum.STREAMING_OPTIONS]], option).sort()
                :
                [...state[ShowCreateFormEnum.STREAMING_OPTIONS], option].sort(),
        })),

        on(ShowCreateEditActions.clear, (state) => initialState),
    );
}
