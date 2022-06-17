import {Component, Input, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraRecordAudioModel} from './amphora-record-audio.model';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {PopUpTypesEnum} from '../../../shared/enums/component-types/pop-up-types.enum';

@Component({
    selector: 'amphora-record-audio',
    templateUrl: './amphora-record-audio.component.html',
    styleUrls: ['./amphora-record-audio.component.scss'],
})
export class AmphoraRecordAudioComponent implements OnInit {
    @Input()
    public model: AmphoraRecordAudioModel;

    public hover = false;
    public recordPrimaryIconModel: AmphoraIconModel;
    public recordWhiteIconModel: AmphoraIconModel;

    constructor(private popUpService: PopUpService) { }

    public onRecordClick(): void {
        this.popUpService.showPopUp(PopUpTypesEnum.RECORDING);
    }

    public ngOnInit(): void {
        this.recordPrimaryIconModel = AmphoraIconModel.create(IconsEnum.RECORDING_PRIMARY, {
            size: {
                width: 128,
                height: 128,
            }
        });

        this.recordWhiteIconModel = AmphoraIconModel.create(IconsEnum.RECORDING_WHITE, {
            size: {
                width: 128,
                height: 128,
            }
        });


    }

    public changeHoverStatus(value: boolean): void {
        this.hover = value;
    }
}
