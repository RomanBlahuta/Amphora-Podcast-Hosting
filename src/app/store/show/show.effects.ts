import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {map, switchMap} from 'rxjs/operators';
import {ShowActions} from './show.actions';
import {ShowHttp} from '../../services/http/show/show.http';

@Injectable()
export class ShowEffects {
    public getShow = createEffect(() => this.actions$.pipe(
        ofType(ShowActions.loadShow),
        switchMap((action) => this.showHttp.getShow(action.id).pipe(
            map(response => ShowActions.loadShowSuccess({show: response})),
        ))
    ));

    constructor(private actions$: Actions,
                private store$: Store,
                private showHttp: ShowHttp) { }
}
