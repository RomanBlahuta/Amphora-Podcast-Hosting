import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {NavController} from '@ionic/angular';
import {PopUpService} from '../../services/utils/pop-up.service';
import {map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {DashboardActions} from './dashboard.actions';
import {ShowHttp} from '../../services/http/show/show.http';
import {DashboardSelectors} from './dashboard.selectors';

@Injectable()
export class DashboardEffects {

    public getUserShows = createEffect(() => this.actions$.pipe(
        ofType(DashboardActions.loadShows),
        withLatestFrom(
            this.store$.select(DashboardSelectors.selectCurrentPage),
            this.store$.select(DashboardSelectors.selectSearchString),
        ),
        switchMap(([_, currentPage, searchString]) => this.showHttp.getPaginatedShows(currentPage, searchString).pipe(
            map(response => DashboardActions.loadShowsSuccess({shows: response})),
        ))
    ));

    public reloadShows = createEffect(() => this.actions$.pipe(
        ofType(DashboardActions.changePage),
        tap(() => this.store$.dispatch(DashboardActions.loadShows())),
    ), {dispatch: false});

    constructor(private actions$: Actions,
                private store$: Store,
                private navController: NavController,
                private popUpService: PopUpService,
                private showHttp: ShowHttp) { }
}
