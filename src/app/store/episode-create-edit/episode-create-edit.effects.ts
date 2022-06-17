import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {NavController} from '@ionic/angular';
import {EpisodeCreateEditActions} from './episode-create-edit.actions';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {EpisodeCreateEditSelectors} from './episode-create-edit.selectors';
import {EpisodeHttp} from '../../services/http/episode/episode.http';
import {RoutesEnum} from '../../shared/enums/routes.enum';
import {ImageHttp} from '../../services/http/image/image.http';

@Injectable()
export class EpisodeCreateEditEffects {

    public createImage$ = createEffect(() => this.actions$.pipe(
        ofType(EpisodeCreateEditActions.createImage),
        withLatestFrom(
            this.store$.select(EpisodeCreateEditSelectors.selectImageFileName),
            this.store$.select(EpisodeCreateEditSelectors.selectImage),
        ),
        switchMap(([_, fileName, file]) => this.imageHttp.createImage(fileName, file).pipe(
                map(response => EpisodeCreateEditActions.createImageSuccess({response})),
            ),
        ),
    ));

    public submitEpisode$ = createEffect(() => this.actions$.pipe(
        ofType(EpisodeCreateEditActions.submit),
        withLatestFrom(
            this.store$.select(EpisodeCreateEditSelectors.selectForm),
        ),
        switchMap(([_, data]) => this.episodeHttp.createEpisode(data).pipe(
            map(() => EpisodeCreateEditActions.submitSuccess()),
        )),
    ));

    public submitEpisodeSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(EpisodeCreateEditActions.submitSuccess),
        tap(() => {
            this.navController.navigateRoot(RoutesEnum.DASHBOARD);
        }),
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private imageHttp: ImageHttp,
                private navController: NavController,
                private episodeHttp: EpisodeHttp) { }
}