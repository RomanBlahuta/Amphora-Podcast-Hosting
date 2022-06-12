import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {NavController} from '@ionic/angular';
import {PopUpService} from '../../services/utils/pop-up.service';
import {ShowCreateEditActions} from './show-create-edit.actions';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {ShowCreateEditSelectors} from './show-create-edit.selectors';
import {ShowHttp} from '../../services/http/show/show.http';
import {RoutesEnum} from '../../shared/enums/routes.enum';

@Injectable()
export class ShowCreateEditEffects {

    public submitShow$ = createEffect(() => this.actions$.pipe(
        ofType(ShowCreateEditActions.submit),
        withLatestFrom(
            this.store$.select(ShowCreateEditSelectors.selectForm),
            this.store$.select(ShowCreateEditSelectors.selectImageFileName)
        ),
        switchMap(([_, data, fileName]) => this.showHttp.createShow(data, fileName).pipe(
            map(() => ShowCreateEditActions.submitSuccess()),
        )),
    ));

    public submitShowSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(ShowCreateEditActions.submitSuccess),
        tap(() => {
            this.navController.navigateRoot(RoutesEnum.DASHBOARD);
        }),
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private navController: NavController,
                private showHttp: ShowHttp) { }
}
