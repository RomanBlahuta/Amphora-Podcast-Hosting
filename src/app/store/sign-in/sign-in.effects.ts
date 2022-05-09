import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {SignInActions} from './sign-in.actions';
import {tap, withLatestFrom} from 'rxjs/operators';
import {SignInSelectors} from './sign-in.selectors';

@Injectable()
export class SignInEffects {
    public submit$ = createEffect(() => this.actions$.pipe(
        ofType(SignInActions.submit),
        withLatestFrom(this.store$.select(SignInSelectors.selectForm)),
        // switchMap(() => )
        tap(([_, creds]) => {
            console.log('Submit: ', creds);
            this.store$.dispatch(SignInActions.clear());
        })
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store) { }
}
