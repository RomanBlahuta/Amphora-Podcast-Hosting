import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {SignUpActions} from './sign-up.actions';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {SignUpSelectors} from './sign-up.selectors';
import {NavController} from '@ionic/angular';
import {LocalStorageService} from '../../services/utils/local-storage.service';
import {AuthHttp} from '../../services/http/auth/auth.http';
import {PopUpService} from '../../services/utils/pop-up.service';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';
import {UserActions} from '../user/user.actions';
import {UserSelectors} from '../user/user.selectors';

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
            this.store$.dispatch(UserActions.loadUserSuccess({response: action.response}));
            this.store$.dispatch(SignUpActions.requestVerificationToken());
            this.popUpService.showPopUp(PopUpTypesEnum.CHECK_EMAIL);
        }),
    ), {dispatch: false});

    public requestVerificationToken$ = createEffect(() => this.actions$.pipe(
        ofType(SignUpActions.requestVerificationToken),
        withLatestFrom(this.store$.select(UserSelectors.selectEmail)),
        switchMap(([_, email]) => this.authHttp.requestVerificationToken({email}).pipe(
            map(response => SignUpActions.requestVerificationTokenSuccess({response})),
        ))
    ));

    public requestVerificationTokenSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(SignUpActions.requestVerificationTokenSuccess),
        tap((action) => {
            this.popUpService.showPopUp(PopUpTypesEnum.CHECK_EMAIL);
        }),
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private navController: NavController,
                private popUpService: PopUpService,
                private localStorage: LocalStorageService,
                private authHttp: AuthHttp) { }
}
