import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../shared/enums/routes.enum';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public router: NavController) {
    }

    public canActivate(): boolean {
        if (false) {
            this.router.navigateRoot(RoutesEnum.SIGN_IN);
            return false;
        }
        return true;
    }
}
