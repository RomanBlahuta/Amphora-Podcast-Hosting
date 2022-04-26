import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {IconsService} from './utils/icons.service';
import {LocalStorageService} from './utils/local-storage.service';
import {RouterService} from './utils/router.service';

@Injectable({
    providedIn: 'root',
})
export class AppInitService {

    constructor(
        private store$: Store,
        private localStorageService: LocalStorageService,
        private routerService: RouterService,
        private _iconsService: IconsService,
    ) {}

    public initApp(): void {
        //
    }
}
