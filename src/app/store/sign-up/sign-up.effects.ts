import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {SignUpActions} from './sign-up.actions';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {SignUpSelectors} from './sign-up.selectors';
import {RoutesEnum} from '../../shared/enums/routes.enum';
import {NavController} from '@ionic/angular';
import {LocalStorageService} from '../../services/utils/local-storage.service';
import {AuthHttp} from '../../services/http/auth/auth.http';

@Injectable()
export class SignUpEffects {
    public submit$ = createEffect(() => this.actions$.pipe(
        ofType(SignUpActions.submit),
        withLatestFrom(this.store$.select(SignUpSelectors.selectForm)),
        switchMap(([_, creds]) => this.authHttp.signUp(creds).pipe(
            map(response => SignUpActions.submitSuccess({response})),
        ))
    ));

    public submitSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(SignUpActions.submitSuccess),
        tap((action) => {
            this.store$.dispatch(SignUpActions.clear());
            this.navController.navigateRoot(RoutesEnum.SIGN_IN);
        }),
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private navController: NavController,
                private localStorage: LocalStorageService,
                private authHttp: AuthHttp) { }
}
