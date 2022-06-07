import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {UserActions} from './user.actions';
import {map, switchMap, tap} from 'rxjs/operators';
import {UserHttp} from '../../services/http/user/user.http';
import {RoutesEnum} from '../../shared/enums/routes.enum';
import {NavController} from '@ionic/angular';
import {LocalStorageService} from '../../services/utils/local-storage.service';
import {AuthHttp} from '../../services/http/auth/auth.http';

@Injectable()
export class UserEffects {
    public loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.loadUser),
        switchMap(() => this.userHttp.loadUserInfo().pipe(
            map(response => UserActions.loadUserSuccess({response})),
        )),
    ));

    public signOut$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.signOut),
        switchMap(() => this.authHttp.signOut().pipe(
            map(() => UserActions.signOutSuccess()),
        )),
    ));

    public signOutSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.signOutSuccess),
        tap(() => {
            this.navCtrl.navigateRoot(RoutesEnum.SIGN_IN);
            this.localStorageService.clear();
        }),
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private navCtrl: NavController,
                private localStorageService: LocalStorageService,
                private userHttp: UserHttp,
                private authHttp: AuthHttp) { }
}
