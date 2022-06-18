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
import {ShowHttp} from '../../services/http/show/show.http';
import {FormModeEnum} from '../../shared/enums/forms/form-mode.enum';

@Injectable()
export class EpisodeCreateEditEffects {

    public loadSeriesInit$ = createEffect(() => this.actions$.pipe(
        ofType(EpisodeCreateEditActions.setFormMode),
        tap((action) => {
            this.store$.dispatch(EpisodeCreateEditActions.loadShowSeries());
            if (action.mode === FormModeEnum.EDIT) {
                this.store$.dispatch(EpisodeCreateEditActions.loadEpisodeForEdit({id: action.episodeId}));
            }
        }),
    ), {dispatch: false});

    public loadEpisodeForEdit$ = createEffect(() => this.actions$.pipe(
        ofType(EpisodeCreateEditActions.loadEpisodeForEdit),
        switchMap(action => this.episodeHttp.getEpisodeById(action.id).pipe(
            map(response => EpisodeCreateEditActions.loadEpisodeForEditSuccess({response}))
        )),
    ));

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

    public createAudio$ = createEffect(() => this.actions$.pipe(
        ofType(EpisodeCreateEditActions.createAudio),
        withLatestFrom(
            this.store$.select(EpisodeCreateEditSelectors.selectAudioFileName),
            this.store$.select(EpisodeCreateEditSelectors.selectAudioFile),
        ),
        switchMap(([_, fileName, file]) => this.episodeHttp.createAudio(file, fileName).pipe(
                map(response => EpisodeCreateEditActions.createAudioSuccess({response})),
            ),
        ),
    ));

    public loadAllSeries$ = createEffect(() => this.actions$.pipe(
        ofType(EpisodeCreateEditActions.loadShowSeries),
        withLatestFrom(
            this.store$.select(EpisodeCreateEditSelectors.selectShowId),
        ),
        switchMap(([_, id]) => this.showHttp.getSeriesByShowId(id).pipe(
            map(response => EpisodeCreateEditActions.loadShowSeriesSuccess({response})),
        )),
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
                private showHttp: ShowHttp,
                private navController: NavController,
                private episodeHttp: EpisodeHttp) { }
}
