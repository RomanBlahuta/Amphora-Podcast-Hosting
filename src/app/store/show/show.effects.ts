import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {NavController} from '@ionic/angular';
import {PopUpService} from '../../services/utils/pop-up.service';

@Injectable()
export class ShowEffects {

    constructor(private actions$: Actions,
                private store$: Store,
                private navController: NavController,
                private popUpService: PopUpService) { }
}
