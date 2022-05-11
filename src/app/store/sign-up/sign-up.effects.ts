import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {SignUpActions} from './sign-up.actions';
import {tap, withLatestFrom} from 'rxjs/operators';
import {SignUpSelectors} from './sign-up.selectors';

@Injectable()
export class SignUpEffects {
    public submit$ = createEffect(() => this.actions$.pipe(
        ofType(SignUpActions.submit),
        withLatestFrom(this.store$.select(SignUpSelectors.selectForm)),
        // switchMap(() => )
        tap(([_, creds]) => {
            console.log('Submit: ', creds);
            this.store$.dispatch(SignUpActions.clear());
        })
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store) { }
}
