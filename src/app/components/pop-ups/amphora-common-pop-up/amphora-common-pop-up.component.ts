import {Component, Input, OnInit} from '@angular/core';
import {AmphoraCommonPopUpModel} from './amphora-common-pop-up.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PopUpTypesEnum} from '../../../shared/enums/component-types/pop-up-types.enum';
import {PopUpSelectors} from '../../../store/pop-up/pop-up.selectors';
import {fadeInOutAnimation} from '../../../shared/animations/fade-in-out.animation';

@Component({
    selector: 'amphora-common-pop-up',
    templateUrl: './amphora-common-pop-up.component.html',
    styleUrls: ['../amphora-pop-up.component.scss'],
    animations: [fadeInOutAnimation],
})
export class AmphoraCommonPopUpComponent implements OnInit {
    @Input()
    public model: AmphoraCommonPopUpModel;
    public currentPopUp$: Observable<PopUpTypesEnum>;

    constructor(private store$: Store) { }

    public ngOnInit(): void {
        this.currentPopUp$ = this.store$.select(PopUpSelectors.selectCommonPopUp);
    }

}
