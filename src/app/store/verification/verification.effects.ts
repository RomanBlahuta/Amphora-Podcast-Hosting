import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {VerificationActions} from './verification.actions';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {VerificationSelectors} from './verification.selectors';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';
import {PopUpService} from '../../services/utils/pop-up.service';
import {AuthHttp} from '../../services/http/auth/auth.http';

@Injectable()
export class VerificationEffects {
    public submit$ = createEffect(() => this.actions$.pipe(
        ofType(VerificationActions.submit),
        withLatestFrom(this.store$.select(VerificationSelectors.selectVerificationCode)),
        switchMap(([_, token]) => this.authHttp.verify({token}).pipe(
            map(response => VerificationActions.submitSuccess({response})),
        ))
    ));

    public submitSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(VerificationActions.submitSuccess),
        tap((action) => {
            this.store$.dispatch(VerificationActions.clear());
            this.popUpService.showPopUp(PopUpTypesEnum.SUCCESS);
        }),
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private authHttp: AuthHttp,
                private popUpService: PopUpService) { }
}
