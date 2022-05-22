import {createAction, props} from '@ngrx/store';
import {ShowCreateFormEnum} from '../../shared/enums/forms/show-create-form.enum';

export namespace ShowCreateEditActions {
    export const input = createAction(
        '[Show Create Edit] Input',
        props<{value: string | File; field: ShowCreateFormEnum}>(),
    );

    export const submit = createAction(
        '[Show Create Edit] Submit',
    );

    export const addSeries = createAction(
        '[Show Create Edit] Add Series',
        props<{series: any}>(),
    );

    export const removeSeries = createAction(
        '[Show Create Edit] Remove Series',
        props<{series: any}>(),
    );

    export const clear = createAction(
        '[Show Create Edit] Clear',
    );
}
