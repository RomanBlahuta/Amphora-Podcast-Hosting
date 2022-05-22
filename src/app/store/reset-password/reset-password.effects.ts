import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {NavController} from '@ionic/angular';
import {PopUpService} from '../../services/utils/pop-up.service';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';
import {LocalStorageService} from '../../services/utils/local-storage.service';
import {AuthHttp} from '../../services/http/auth/auth.http';
import {ResetPasswordActions} from './reset-password.actions';
import {ResetPasswordSelectors} from './reset-password.selectors';

@Injectable()
export class ResetPasswordEffects {
    public submit$ = createEffect(() => this.actions$.pipe(
        ofType(ResetPasswordActions.submit),
        withLatestFrom(this.store$.select(ResetPasswordSelectors.selectForm)),
        switchMap(([_, email]) => this.authHttp.resetPassword(email).pipe(
            map(response => ResetPasswordActions.submitSuccess({response})),
        ))
    ));

    public submitSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(ResetPasswordActions.submitSuccess),
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
