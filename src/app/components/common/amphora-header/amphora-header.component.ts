import {Component, OnInit} from '@angular/core';
import {AmphoraIconModel} from '../amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraButtonModel} from '../amphora-button/amphora-button.model';
import {ButtonColorsEnum} from '../../../shared/enums/component-types/button-types.enum';
import {HeaderTypesEnum} from '../../../shared/enums/component-types/header-types.enum';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../../shared/enums/routes.enum';
import {LocalStorageService} from '../../../services/utils/local-storage.service';
import {LocalStorageStateEnum} from '../../../shared/enums/local-storage-state.enum';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {UserActions} from '../../../store/user/user.actions';

@Component({
  selector: 'amphora-header',
  templateUrl: './amphora-header.component.html',
  styleUrls: ['./amphora-header.component.scss'],
})
export class AmphoraHeaderComponent implements OnInit {
    public headerType: HeaderTypesEnum;

    public HeaderTypesEnum = HeaderTypesEnum;

    public logoModel: AmphoraIconModel;
    public signInBtnModel: AmphoraButtonModel;
    public signUpBtnModel: AmphoraButtonModel;
    public logOutBtnModel: AmphoraButtonModel;
    public dashboardBtnModel: AmphoraButtonModel;

    constructor( private navCtrl: NavController,
                 private localStorageService: LocalStorageService,
                 private router: Router,
                 private store$: Store) { }

    public ngOnInit(): void {
        this.createModels();
        if (this.localStorageService.get(LocalStorageStateEnum.TOKEN)) {
            this.headerType = (this.router.url === `/${RoutesEnum.DASHBOARD}`) ?
                HeaderTypesEnum.AUTHORIZED_DASHBOARD : HeaderTypesEnum.AUTHORIZED;
        } else {
            switch (this.router.url) {
                case `/${RoutesEnum.LANDING}`:
                    this.headerType = HeaderTypesEnum.AUTH;
                    break;
                case `/${RoutesEnum.SIGN_IN}`:
                    this.headerType = HeaderTypesEnum.SIGN_UP;
                    break;
                case `/${RoutesEnum.SIGN_UP}`:
                    this.headerType = HeaderTypesEnum.SIGN_IN;
                    break;
            }
        }
    }

    private createModels(): void {
        this.logoModel = this.createLogo();
        this.signUpBtnModel = this.createSignUpButton();
        this.signInBtnModel = this.createSignInButton();
        this.logOutBtnModel = this.createLogOutButton();
        this.dashboardBtnModel = this.createDashboardButton();
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
            onClick: () => {
                this.store$.dispatch(UserActions.signOut());
            },
            buttonColor: ButtonColorsEnum.WHITE,
        });
    }

    private createSignUpButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Sign Up', {
            onClick: () => this.navCtrl.navigateRoot(RoutesEnum.SIGN_UP),
            buttonColor: ButtonColorsEnum.PRIMARY,
        });
    }

    private createDashboardButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Dashboard', {
            onClick: () => this.navCtrl.navigateRoot(RoutesEnum.DASHBOARD),
            buttonColor: ButtonColorsEnum.PRIMARY,
        });
    }
}
