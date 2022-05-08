import {Component, Input, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraButtonModel} from '../amphora-button/amphora-button.model';
import {ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {AmphoraHeaderModel} from './amphora-header.model';
import {HeaderTypesEnum} from '../../../shared/enums/component-types/header-types.enum';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../../shared/enums/routes.enum';

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

    constructor( private navCtrl: NavController) { }

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
        return AmphoraButtonModel.create('Sign In', {
            onClick: () => this.navCtrl.navigateRoot(RoutesEnum.SIGN_IN),
            buttonType: ButtonTypesEnum.WHITE
        });
    }

    private createSignUpButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Sign Up', {
            onClick: () => this.navCtrl.navigateRoot(RoutesEnum.SIGN_UP),
            buttonType: ButtonTypesEnum.PRIMARY
        });
    }
}
