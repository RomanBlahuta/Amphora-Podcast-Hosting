import {createAction, props} from '@ngrx/store';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';
import {ContentTypesEnum} from '../../shared/enums/content-types.enum';

export namespace PopUpActions {
    export const showErrorPopUp = createAction(
        '[Pop Up] Show Error Pop Up',
        props<{errorMessage: string}>(),
    );

    export const hideErrorPopUp = createAction(
        '[Pop Up] Hide Error Pop Up',
    );

    export const showPopUp = createAction(
        '[Pop Up] Show Pop Up',
        props<{ popUpType: PopUpTypesEnum }>(),
    );

    export const hidePopUp = createAction(
        '[Pop Up] Hide Pop Up',
    );

    export const showConfirmDeletionPopUp = createAction(
        '[Pop Up] Show Confirm Deletion Pop Up',
        props<{item: string; contentType: ContentTypesEnum; id: string}>(),
    );

    export const hideConfirmDeletionPopUp = createAction(
        '[Pop Up] Hide Confirm Deletion Pop Up',
    );
}
