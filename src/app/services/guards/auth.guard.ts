import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../shared/enums/routes.enum';
import {LocalStorageService} from '../utils/local-storage.service';
import {LocalStorageStateEnum} from '../../shared/enums/local-storage-state.enum';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: NavController,
                private localStorageService: LocalStorageService) {
    }

    public canActivate(): boolean {
        if (!this.localStorageService.get(LocalStorageStateEnum.TOKEN)) {
            this.router.navigateRoot(RoutesEnum.SIGN_IN);
            return false;
        }
        return true;
    }
}
