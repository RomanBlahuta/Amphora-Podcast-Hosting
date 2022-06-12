import {createAction, props} from '@ngrx/store';
import {ShowCreateFormEnum} from '../../shared/enums/forms/show-create-form.enum';
import {StreamingIntegrationsEnum} from '../../shared/enums/streaming-integrations.enum';

export namespace ShowCreateEditActions {
    export const input = createAction(
        '[Show Create Edit] Input',
        props<{value: string | File; field: ShowCreateFormEnum}>(),
    );

    export const submit = createAction(
        '[Show Create Edit] Submit',
    );

    export const submitSuccess = createAction(
        '[Show Create Edit] Submit Success',
    );

    export const addSeries = createAction(
        '[Show Create Edit] Add Series',
    );

    export const addImgUrl = createAction(
        '[Show Create Edit] Add Image URL',
        props<{url: string; fileName: string}>(),
    );

    export const removeSeries = createAction(
        '[Show Create Edit] Remove Series',
        props<{series: string}>(),
    );

    export const clear = createAction(
        '[Show Create Edit] Clear',
    );

    export const selectStreamingOption = createAction(
        '[Show Create Edit] Select Streaming Option',
        props<{option: StreamingIntegrationsEnum}>(),
    );
}
