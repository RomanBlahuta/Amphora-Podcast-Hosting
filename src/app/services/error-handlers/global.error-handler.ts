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
        let errorMessage = error.message;

        if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
                localStorageService.clear();
                navController.navigateRoot(RoutesEnum.SIGN_IN);
                errorMessage = 'Unauthorized: Pleade Sign In before proceeding.';
            } else {
                switch (error.status) {
                    case 400: {
                        errorMessage = 'Bad Request: Invalid or unprocessable data was entered.';
                        break;
                    }
                    case 422: {
                        errorMessage = 'Bad Request: Invalid or unprocessable data was entered.';
                        break;
                    }
                    case 500: {
                        errorMessage = 'Server Error: our server has experienced some difficulties while processing your request.';
                        break;
                    }
                    case 0: {
                        errorMessage = 'Server Error: our server has experienced some difficulties while processing your request.';
                        break;
                    }
                    case 503: {
                        errorMessage = 'Service Unavailable: our application\'s server is currently ' +
                            'not available. Please accept our apologies for these inconveniences';
                        break;
                    }
                }
            }
        }

        this.zone.run(() =>
            popUpService.showErrorPopUp(
                errorMessage || 'Undefined client error',
            )
        );

        console.error(error.message);
    }
}
