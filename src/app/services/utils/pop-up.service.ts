import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {PopUpActions} from '../../store/pop-up/pop-up.actions';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';
import {AmphoraCommonPopUpModel} from '../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.model';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {ButtonTypesEnum} from '../../shared/enums/component-types/button-types.enum';

@Injectable({
    providedIn: 'root',
})
export class PopUpService {
    constructor(private store$: Store) {
    }

    public showPopUp(popUpType: PopUpTypesEnum): void {
        this.store$.dispatch(PopUpActions.showPopUp({ popUpType }));
    }

    public hidePopUp(): void {
        this.store$.dispatch(PopUpActions.hidePopUp());
    }

    public showErrorPopUp(): void {
        this.store$.dispatch(PopUpActions.showErrorPopUp());
    }

    public hideErrorPopUp(): void {
        this.store$.dispatch(PopUpActions.hideErrorPopUp());
    }

    public createSuccessPopUp(onButtonClick: () => void): AmphoraCommonPopUpModel {
        return AmphoraCommonPopUpModel.create('Success!', {
            buttons: [
                AmphoraButtonModel.create('OK', {
                    buttonType: ButtonTypesEnum.WHITE,
                    onClick: onButtonClick,
                }),
            ],
            popUpType: PopUpTypesEnum.SUCCESS,
        });
    }
}
