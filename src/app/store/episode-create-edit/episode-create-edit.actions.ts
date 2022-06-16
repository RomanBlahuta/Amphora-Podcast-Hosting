import {createAction, props} from '@ngrx/store';
import {EpisodeCreateFormEnum} from '../../shared/enums/forms/episode-create-form.enum';
import {StreamingIntegrationsEnum} from '../../shared/enums/streaming-integrations.enum';
import {ICreateImageResponseDto} from '../../services/http/image/image.dto';

export namespace EpisodeCreateEditActions {
    export const input = createAction(
        '[Episode Create Edit] Input',
        props<{value: string | File; field: EpisodeCreateFormEnum}>(),
    );

    export const submit = createAction(
        '[Episode Create Edit] Submit',
    );

    export const submitSuccess = createAction(
        '[Episode Create Edit] Submit Success',
    );

    export const addSeries = createAction(
        '[Episode Create Edit] Add Series',
    );

    export const createImage = createAction(
        '[Episode Create Edit] Create Image',
        props<{file: File; url: string; fileName: string}>(),
    );

    export const createImageSuccess = createAction(
        '[Episode Create Edit] Create Image Success',
        props<{response: ICreateImageResponseDto}>()
    );

    export const removeSeries = createAction(
        '[Episode Create Edit] Remove Series',
        props<{series: string}>(),
    );

    export const clear = createAction(
        '[Episode Create Edit] Clear',
    );

    export const selectStreamingOption = createAction(
        '[Episode Create Edit] Select Streaming Option',
        props<{option: StreamingIntegrationsEnum}>(),
    );
}
