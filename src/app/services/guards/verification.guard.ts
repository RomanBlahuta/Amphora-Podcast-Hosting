import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {NavController} from '@ionic/angular';
import {LocalStorageService} from '../utils/local-storage.service';
import {LocalStorageStateEnum} from '../../shared/enums/local-storage-state.enum';
import {RoutesEnum} from '../../shared/enums/routes.enum';

@Injectable()
export class VerificationGuardService implements CanActivate {
    constructor(private router: NavController,
                private localStorageService: LocalStorageService) {
    }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!JSON.parse(this.localStorageService.get(LocalStorageStateEnum.VERIFIED))) {
            this.router.navigateRoot(RoutesEnum.ROOT);
            return false;
        }
        return true;
    }
}
