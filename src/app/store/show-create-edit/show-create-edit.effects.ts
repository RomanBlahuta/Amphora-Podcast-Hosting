import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {NavController} from '@ionic/angular';
import {ShowCreateEditActions} from './show-create-edit.actions';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {ShowCreateEditSelectors} from './show-create-edit.selectors';
import {ShowHttp} from '../../services/http/show/show.http';
import {RoutesEnum} from '../../shared/enums/routes.enum';
import {ImageHttp} from '../../services/http/image/image.http';

@Injectable()
export class ShowCreateEditEffects {

    public createImage$ = createEffect(() => this.actions$.pipe(
        ofType(ShowCreateEditActions.createImage),
        withLatestFrom(
            this.store$.select(ShowCreateEditSelectors.selectImageFileName),
            this.store$.select(ShowCreateEditSelectors.selectImage),
        ),
        switchMap(([_, fileName, file]) => this.imageHttp.createImage(fileName, file).pipe(
                map(response => ShowCreateEditActions.createImageSuccess({response})),
            ),
        ),
    ));

    public submitShow$ = createEffect(() => this.actions$.pipe(
        ofType(ShowCreateEditActions.submit),
        withLatestFrom(
            this.store$.select(ShowCreateEditSelectors.selectForm),
        ),
        switchMap(([_, data]) => this.showHttp.createShow(data).pipe(
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
                private imageHttp: ImageHttp,
                private navController: NavController,
                private showHttp: ShowHttp) { }
}
