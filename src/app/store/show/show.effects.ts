import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {ShowActions} from './show.actions';
import {ShowHttp} from '../../services/http/show/show.http';
import {EpisodeHttp} from '../../services/http/episode/episode.http';
import loadShowSuccess = ShowActions.loadShowSuccess;
import {ShowSelectors} from './show.selectors';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../shared/enums/routes.enum';
import {PopUpService} from '../../services/utils/pop-up.service';

@Injectable()
export class ShowEffects {
    public getShow$ = createEffect(() => this.actions$.pipe(
        ofType(ShowActions.loadShow),
        switchMap((action) => this.showHttp.getShow(action.id).pipe(
            map(response => ShowActions.loadShowSuccess({show: response})),
        ))
    ));

    public loadShowEpisodes$ = createEffect(() => this.actions$.pipe(
        ofType(loadShowSuccess),
        tap((action) => this.store$.dispatch(ShowActions.loadShowEpisodes({id: action.show.id}))),
    ), {dispatch: false});

    public getShowEpisodes$ = createEffect(() => this.actions$.pipe(
        ofType(ShowActions.loadShowEpisodes),
        withLatestFrom(
            this.store$.select(ShowSelectors.selectCurrentPage),
            this.store$.select(ShowSelectors.selectSearchString),
            this.store$.select(ShowSelectors.selectActiveSeries),
        ),
        switchMap(([action, currentPage, title, series]) => this.episodeHttp.getEpisodesByShowId(
            action.id, currentPage, title, series,
        ).pipe(
            map(response => ShowActions.loadShowEpisodesSuccess({episodes: response})),
        )),
    ));

    public deleteShow$ = createEffect(() => this.actions$.pipe(
        ofType(ShowActions.deleteShow),
        withLatestFrom(this.store$.select(ShowSelectors.selectShowId)),
        switchMap(([_, id]) => this.showHttp.deleteShow(id).pipe(
            map(() => ShowActions.deleteShowSuccess())
        ))
    ));

    public deleteShowSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(ShowActions.deleteShowSuccess),
        tap(() => {
            this.popUpService.hideConfirmDeletionPopUp();
            this.navController.navigateRoot(RoutesEnum.DASHBOARD);
        }),
    ), {dispatch: false});

    public deleteEpisode$ = createEffect(() => this.actions$.pipe(
        ofType(ShowActions.deleteEpisode),
        switchMap(action => this.episodeHttp.deleteEpisode(action.id).pipe(
            map(response => ShowActions.deleteEpisodeSuccess()),
        ))
    ));

    public deleteEpisodeSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(ShowActions.deleteEpisodeSuccess),
        tap(() => {
            this.popUpService.hideConfirmDeletionPopUp();
        })
    ), {dispatch: false});

    public reloadShows$ = createEffect(() => this.actions$.pipe(
        ofType(ShowActions.changePage, ShowActions.setActiveSeries, ShowActions.deleteEpisodeSuccess),
        withLatestFrom(this.store$.select(ShowSelectors.selectShowId)),
        tap(([_, id]) => this.store$.dispatch(ShowActions.loadShowEpisodes({id}))),
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private popUpService: PopUpService,
                private navController: NavController,
                private showHttp: ShowHttp,
                private episodeHttp: EpisodeHttp) { }
}
