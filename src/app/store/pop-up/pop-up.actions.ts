import {createAction, props} from '@ngrx/store';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';

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
}
