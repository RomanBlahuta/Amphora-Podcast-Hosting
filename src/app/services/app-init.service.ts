import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {IconsService} from './utils/icons.service';
import {LocalStorageService} from './utils/local-storage.service';
import {RouterService} from './utils/router.service';
import {LocalStorageStateEnum} from '../shared/enums/local-storage-state.enum';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../shared/enums/routes.enum';

@Injectable({
    providedIn: 'root',
})
export class AppInitService {

    constructor(
        private store$: Store,
        private localStorageService: LocalStorageService,
        private routerService: RouterService,
        private iconsService: IconsService,
        private navController: NavController,
    ) {}

    public initApp(): void {
        this.iconsService.initCustomIcons();
        if (this.localStorageService.get(LocalStorageStateEnum.TOKEN)) {
            this.navController.navigateRoot(RoutesEnum.DASHBOARD);
        } else {
            this.navController.navigateRoot(RoutesEnum.LANDING);
        }
    }
}
