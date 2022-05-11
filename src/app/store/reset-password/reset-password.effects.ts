import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ResetPasswordActions} from './reset-password.actions';
import {tap, withLatestFrom} from 'rxjs/operators';
import {ResetPasswordSelectors} from './reset-password.selectors';

@Injectable()
export class ResetPasswordEffects {
    public submit$ = createEffect(() => this.actions$.pipe(
        ofType(ResetPasswordActions.submit),
        withLatestFrom(this.store$.select(ResetPasswordSelectors.selectForm)),
        // switchMap(() => )
        tap(([_, creds]) => {
            console.log('Submit: ', creds);
            this.store$.dispatch(ResetPasswordActions.clear());
        })
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store) { }
}
