import {createAction, props} from '@ngrx/store';
import {ShowCreateFormEnum} from '../../shared/enums/forms/show-create-form.enum';
import {StreamingIntegrationsEnum} from '../../shared/enums/streaming-integrations.enum';
import {ICreateImageResponseDto} from '../../services/http/image/image.dto';
import {FormModeEnum} from '../../shared/enums/forms/form-mode.enum';
import {ILoadShowResponseDTO} from '../../services/http/show/show.dto';

export namespace ShowCreateEditActions {
    export const input = createAction(
        '[Show Create Edit] Input',
        props<{value: string | File; field: ShowCreateFormEnum}>(),
    );

    export const setFormMode = createAction(
        '[Show Create Edit] Set Form Mode',
        props<{mode: FormModeEnum; id: string}>(),
    );

    export const loadShowForEdit = createAction(
        '[Show Create Edit] Load Show For Edit',
    );

    export const loadShowForEditSuccess = createAction(
        '[Show Create Edit] Load Show For Edit Success',
        props<{response: ILoadShowResponseDTO}>(),
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

    export const createImage = createAction(
        '[Show Create Edit] Create Image',
        props<{file: File; url: string; fileName: string}>(),
    );

    export const createImageSuccess = createAction(
        '[Show Create Edit] Create Image Success',
        props<{response: ICreateImageResponseDto}>()
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
