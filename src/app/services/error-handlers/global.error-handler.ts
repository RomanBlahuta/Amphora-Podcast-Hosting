import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import {PopUpService} from '../utils/pop-up.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(
       private injector: Injector,
        private zone: NgZone,
    ) {}

    handleError(error: any) {
        const popUpService = this.injector.get(PopUpService);

        this.zone.run(() =>
            popUpService.showErrorPopUp(
                error?.message || 'Undefined client error',
            )
        );

        console.error(error.message);
    }
}
