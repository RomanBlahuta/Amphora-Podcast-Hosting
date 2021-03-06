import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../shared/enums/routes.enum';
import {LocalStorageService} from '../utils/local-storage.service';
import {LocalStorageStateEnum} from '../../shared/enums/local-storage-state.enum';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: NavController,
                private localStorageService: LocalStorageService) {
    }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (next.url[0].path === RoutesEnum.LANDING) {
            return true;
        }

        if (!this.localStorageService.get(LocalStorageStateEnum.TOKEN)) {
            this.router.navigateRoot(RoutesEnum.SIGN_IN);
            return false;
        }
        return true;
    }
}
