import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import {PopUpService} from '../utils/pop-up.service';
import {HttpErrorResponse} from '@angular/common/http';
import {LocalStorageService} from '../utils/local-storage.service';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../shared/enums/routes.enum';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(
       private injector: Injector,
        private zone: NgZone,
    ) {}

    handleError(error: any) {
        const popUpService = this.injector.get(PopUpService);
        const localStorageService = this.injector.get(LocalStorageService);
        const navController = this.injector.get(NavController);

        if (error instanceof HttpErrorResponse && error.status === 401) {
            localStorageService.clear();
            navController.navigateRoot(RoutesEnum.SIGN_IN);
        }

        this.zone.run(() =>
            popUpService.showErrorPopUp(
                error?.message || 'Undefined client error',
            )
        );

        console.error(error.message);
    }
}
