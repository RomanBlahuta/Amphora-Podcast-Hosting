import {Component, Input, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraButtonModel} from '../amphora-button/amphora-button.model';
import {ButtonTypesEnum} from '../../../shared/enums/button-types.enum';
import {AmphoraHeaderModel} from './amphora-header.model';
import {HeaderTypesEnum} from '../../../shared/enums/header-types.enum';

@Component({
  selector: 'amphora-header',
  templateUrl: './amphora-header.component.html',
  styleUrls: ['./amphora-header.component.scss'],
})
export class AmphoraHeaderComponent implements OnInit {
    @Input()
    public model: AmphoraHeaderModel;

    public HeaderTypesEnum = HeaderTypesEnum;

    public logoModel: AmphoraIconModel;
    public signInBtnModel: AmphoraButtonModel;
    public signUpBtnModel: AmphoraButtonModel;

    constructor() { }

    public ngOnInit(): void {
        this.createModels();
    }

    private createModels(): void {
        this.logoModel = this.createLogo();
        this.signUpBtnModel = this.createSignUpButton();
        this.signInBtnModel = this.createSignInButton();
    }

    private createLogo(): AmphoraIconModel {
        return AmphoraIconModel.create(IconsEnum.LOGO, {size: {width: 183, height: 40}});
    }

    private createSignInButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Sign In', {onClick: () => console.log('Sign In'), buttonType: ButtonTypesEnum.WHITE});
    }

    private createSignUpButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Sign Up', {onClick: () => console.log('Sign Up'), buttonType: ButtonTypesEnum.PRIMARY});
    }
}
