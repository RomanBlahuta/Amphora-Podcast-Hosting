import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LandingActions} from './landing.actions';
import {map, switchMap} from 'rxjs/operators';
import {ShowHttp} from '../../services/http/show/show.http';

@Injectable()
export class LandingEffects {
    public loadFeaturedShows$ = createEffect(() => this.actions$.pipe(
        ofType(LandingActions.loadPodcasts),
        switchMap(() => this.showHttp.getFeaturedShows().pipe(
            map(response => LandingActions.loadPodcastsSuccess({response})),
        ))
    ));

    constructor(private store$: Store,
                private showHttp: ShowHttp,
                private actions$: Actions) {
    }
}
