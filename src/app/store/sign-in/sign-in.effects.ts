import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {SignInActions} from './sign-in.actions';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {SignInSelectors} from './sign-in.selectors';
import {AuthHttp} from '../../services/http/auth/auth.http';
import {LocalStorageService} from '../../services/utils/local-storage.service';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../shared/enums/routes.enum';
import {LocalStorageStateEnum} from '../../shared/enums/local-storage-state.enum';

@Injectable()
export class SignInEffects {
    public submit$ = createEffect(() => this.actions$.pipe(
        ofType(SignInActions.submit),
        withLatestFrom(this.store$.select(SignInSelectors.selectForm)),
        switchMap(([_, creds]) => this.authHttp.signIn({username: creds.email, password: creds.password}).pipe(
            map(response => SignInActions.submitSuccess({response})),
        ))
    ));

    public submitSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(SignInActions.submitSuccess),
        tap((action) => {
            this.store$.dispatch(SignInActions.clear());
            this.localStorage.set(LocalStorageStateEnum.TOKEN, action.response.access_token);
            this.navController.navigateRoot(RoutesEnum.DASHBOARD);
        }),
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private navController: NavController,
                private localStorage: LocalStorageService,
                private authHttp: AuthHttp) { }
}
