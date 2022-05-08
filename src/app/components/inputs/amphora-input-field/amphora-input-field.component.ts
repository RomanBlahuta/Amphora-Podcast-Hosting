import {Component, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../../common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';

@Component({
  selector: 'amphora-input-field',
  templateUrl: './amphora-input-field.component.html',
  styleUrls: ['./amphora-input-field.component.scss'],
})
export class AmphoraInputFieldComponent implements OnInit {

    public visibilityIconModel: AmphoraIconModel;

    constructor() { }

    public ngOnInit(): void {
        this.visibilityIconModel = AmphoraIconModel.create(IconsEnum.VISIBLE, {size: {width:32, height: 32}});
    }

}
