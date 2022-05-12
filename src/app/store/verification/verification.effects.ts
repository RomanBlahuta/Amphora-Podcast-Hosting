import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {VerificationActions} from './verification.actions';
import {tap, withLatestFrom} from 'rxjs/operators';
import {VerificationSelectors} from './verification.selectors';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';
import {PopUpService} from '../../services/utils/pop-up.service';

@Injectable()
export class VerificationEffects {
    public submit$ = createEffect(() => this.actions$.pipe(
        ofType(VerificationActions.submit),
        withLatestFrom(this.store$.select(VerificationSelectors.selectForm)),
        // switchMap(() => )
        tap(([_, creds]) => {
            console.log('Submit: ', creds);
            this.store$.dispatch(VerificationActions.clear());
            this.popUpService.showPopUp(PopUpTypesEnum.SUCCESS);
        })
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private popUpService: PopUpService) { }
}
