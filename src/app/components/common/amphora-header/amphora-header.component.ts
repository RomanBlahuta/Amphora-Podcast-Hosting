import {Component, Input, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraButtonModel} from '../amphora-button/amphora-button.model';
import {ButtonColorsEnum} from '../../../shared/enums/component-types/button-types.enum';
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
    public logOutBtnModel: AmphoraButtonModel;

    constructor( private navCtrl: NavController) { }

    public ngOnInit(): void {
        this.createModels();
    }

    private createModels(): void {
        this.logoModel = this.createLogo();
        this.signUpBtnModel = this.createSignUpButton();
        this.signInBtnModel = this.createSignInButton();
        this.logOutBtnModel = this.createLogOutButton();
    }

    private createLogo(): AmphoraIconModel {
        return AmphoraIconModel.create(IconsEnum.LOGO, {size: {width: 183, height: 40}});
    }

    private createSignInButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Sign In', {
            onClick: () => this.navCtrl.navigateRoot(RoutesEnum.SIGN_IN),
            buttonColor: ButtonColorsEnum.WHITE,
        });
    }

    private createLogOutButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Log Out', {
            onClick: () => this.navCtrl.navigateRoot(RoutesEnum.LANDING),
            buttonColor: ButtonColorsEnum.WHITE,
        });
    }

    private createSignUpButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Sign Up', {
            onClick: () => this.navCtrl.navigateRoot(RoutesEnum.SIGN_UP),
            buttonColor: ButtonColorsEnum.PRIMARY,
        });
    }
}
