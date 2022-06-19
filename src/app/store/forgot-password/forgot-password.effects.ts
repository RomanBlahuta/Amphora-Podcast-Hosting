import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ForgotPasswordActions} from './forgot-password.actions';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {NavController} from '@ionic/angular';
import {PopUpService} from '../../services/utils/pop-up.service';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';
import {ForgotPasswordSelectors} from './forgot-password.selectors';
import {LocalStorageService} from '../../services/utils/local-storage.service';
import {AuthHttp} from '../../services/http/auth/auth.http';

@Injectable()
export class ForgotPasswordEffects {
    public submit$ = createEffect(() => this.actions$.pipe(
        ofType(ForgotPasswordActions.submit),
        withLatestFrom(this.store$.select(ForgotPasswordSelectors.selectForm)),
        switchMap(([_, email]) => this.authHttp.forgotPassword(email).pipe(
            map(response => ForgotPasswordActions.submitSuccess({response})),
        ))
    ));

    public submitSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(ForgotPasswordActions.submitSuccess),
        tap((action) => {
            this.popUpService.showPopUp(PopUpTypesEnum.CHECK_EMAIL);
        }),
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private navController: NavController,
                private localStorage: LocalStorageService,
                private authHttp: AuthHttp,
                private popUpService: PopUpService) { }
}
