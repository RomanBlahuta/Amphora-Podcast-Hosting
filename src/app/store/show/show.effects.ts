import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {ShowActions} from './show.actions';
import {ShowHttp} from '../../services/http/show/show.http';
import {EpisodeHttp} from '../../services/http/episode/episode.http';
import loadShowSuccess = ShowActions.loadShowSuccess;
import {ShowSelectors} from './show.selectors';

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
        ))
    ));

    constructor(private actions$: Actions,
                private store$: Store,
                private showHttp: ShowHttp,
                private episodeHttp: EpisodeHttp) { }
}
