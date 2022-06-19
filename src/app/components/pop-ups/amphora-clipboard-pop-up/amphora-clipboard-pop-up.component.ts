import {Component, OnInit} from '@angular/core';
import {AmphoraButtonModel} from '../../common/amphora-button/amphora-button.model';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {ButtonColorsEnum, ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {Observable} from 'rxjs';
import {PopUpTypesEnum} from '../../../shared/enums/component-types/pop-up-types.enum';
import {PopUpSelectors} from '../../../store/pop-up/pop-up.selectors';
import {Store} from '@ngrx/store';
import {fadeInOutAnimation} from '../../../shared/animations/fade-in-out.animation';

@Component({
    selector: 'amphora-clipboard-pop-up',
    templateUrl: './amphora-clipboard-pop-up.component.html',
    styleUrls: ['./amphora-clipboard-pop-up.component.scss'],
    animations: [fadeInOutAnimation],
})
export class AmphoraClipboardPopUpComponent implements OnInit {
    public buttonModel: AmphoraButtonModel;
    public PopUpTypesEnum = PopUpTypesEnum;
    public currentPopUp$: Observable<PopUpTypesEnum>;

    constructor(private popUpService: PopUpService,
                private store$: Store) { }

    public ngOnInit(): void {
        this.currentPopUp$ = this.store$.select(PopUpSelectors.selectCommonPopUp);
        this.buttonModel = AmphoraButtonModel.create('OK', {
            onClick: () => this.popUpService.hidePopUp(),
            buttonColor: ButtonColorsEnum.WHITE,
            buttonType: ButtonTypesEnum.OUTLINED,
        });
    }

}
