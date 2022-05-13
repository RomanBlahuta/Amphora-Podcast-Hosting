import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {PopUpSelectors} from '../../../store/pop-up/pop-up.selectors';
import {AmphoraButtonModel} from '../../common/amphora-button/amphora-button.model';
import {ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {PopUpActions} from '../../../store/pop-up/pop-up.actions';
import {fadeInOutAnimation} from '../../../shared/animations/fade-in-out.animation';

@Component({
    selector: 'amphora-error-pop-up',
    templateUrl: './amphora-error-pop-up.component.html',
    styleUrls: ['../amphora-pop-up.component.scss'],
    animations: [fadeInOutAnimation],
})
export class AmphoraErrorPopUpComponent implements OnInit {
    public showErrorPopUp$: Observable<boolean>;
    public errorMessage$: Observable<string>;
    public buttonModel: AmphoraButtonModel;

    constructor(private store$: Store) { }

    public ngOnInit(): void {
        this.showErrorPopUp$ = this.store$.select(PopUpSelectors.selectErrorPopUp);
        this.errorMessage$ = this.store$.select(PopUpSelectors.selectErrorMessage);

        this.buttonModel = AmphoraButtonModel.create('OK', {
            buttonType: ButtonTypesEnum.WHITE,
            onClick: () => this.store$.dispatch(PopUpActions.hideErrorPopUp()),
        });
    }

}
