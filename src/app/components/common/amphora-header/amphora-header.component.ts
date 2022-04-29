import {Component, Input, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraButtonModel} from '../amphora-button/amphora-button.model';

@Component({
  selector: 'amphora-header',
  templateUrl: './amphora-header.component.html',
  styleUrls: ['./amphora-header.component.scss'],
})
export class AmphoraHeaderComponent implements OnInit {
    @Input()
    public model: any;
    public logoModel: AmphoraIconModel;

    constructor() { }

    public ngOnInit(): void {
        this.logoModel = this.createLogo();
    }

    private createLogo(): AmphoraIconModel {
        return AmphoraIconModel.create(IconsEnum.LOGO, {size: {width: 183, height: 40}});
    }

    private createSignInButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('', {});
    }

    private createSignUpButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('', {});
    }
}
