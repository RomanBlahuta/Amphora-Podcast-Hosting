import {Component, Input, OnInit} from '@angular/core';
import {AmphoraNotificationPopUpModel} from './amphora-notification-pop-up.model';
import {AmphoraButtonModel} from '../../common/amphora-button/amphora-button.model';

@Component({
    selector: 'amphora-notification-pop-up',
    templateUrl: './amphora-notification-pop-up.component.html',
    styleUrls: ['./amphora-notification-pop-up.component.scss'],
})
export class AmphoraNotificationPopUpComponent implements OnInit {
    @Input()
    public model: AmphoraNotificationPopUpModel;
    public buttonModel: AmphoraButtonModel;

    constructor() { }

    public ngOnInit(): void {
        this.buttonModel = AmphoraButtonModel.create(this.model.optional.buttonLabel, {
            onClick: this.model.optional.onClick,
        });
    }
}
