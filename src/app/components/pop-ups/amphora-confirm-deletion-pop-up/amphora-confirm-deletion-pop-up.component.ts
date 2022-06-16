import {Component, Input, OnInit} from '@angular/core';
import {AmphoraCommonPopUpModel} from '../amphora-common-pop-up/amphora-common-pop-up.model';
import {PopUpTypesEnum} from '../../../shared/enums/component-types/pop-up-types.enum';
import {AmphoraConfirmDeletionPopUpModel} from './amphora-confirm-deletion-pop-up.model';
import {AmphoraButtonModel} from '../../common/amphora-button/amphora-button.model';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {ButtonColorsEnum} from '../../../shared/enums/component-types/button-types.enum';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'amphora-confirm-deletion-pop-up',
    templateUrl: './amphora-confirm-deletion-pop-up.component.html',
    styleUrls: ['./amphora-confirm-deletion-pop-up.component.scss'],
})
export class AmphoraConfirmDeletionPopUpComponent implements OnInit {
    @Input()
    public model$: Observable<AmphoraConfirmDeletionPopUpModel>;

    public commonModel$: Observable<AmphoraCommonPopUpModel>;

    constructor(private popUpService: PopUpService) { }

    public ngOnInit(): void {
        this.commonModel$ = this.model$.pipe(
            map(model => AmphoraCommonPopUpModel.create(`Delete ${model.contentType}`, {
                buttons: [
                    AmphoraButtonModel.create('Delete', {
                        onClick: model.onDelete,
                    }),
                    AmphoraButtonModel.create('Cancel', {
                        buttonColor: ButtonColorsEnum.WHITE,
                        onClick: () => this.popUpService.hideConfirmDeletionPopUp(),
                    }),
                ],
                popUpType: PopUpTypesEnum.CONFIRM_DELETION,
            })),
        );
    }

}
