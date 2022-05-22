import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {UserActions} from './user.actions';
import {map, switchMap} from 'rxjs/operators';
import {UserHttp} from '../../services/http/user/user.http';

@Injectable()
export class UserEffects {
    public loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.loadUser),
        switchMap(() => this.userHttp.loadUserInfo().pipe(
            map(response => UserActions.loadUserSuccess({response})),
        )),
    ));

    constructor(private actions$: Actions,
                private store$: Store,
                private userHttp: UserHttp) { }
}
