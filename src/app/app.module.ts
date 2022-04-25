import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {EffectsModule} from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {metaReducers, reducers, routerFeatureKey} from './store/app.store';

export const EFFECTS = [];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      EffectsModule.forRoot(EFFECTS),
      StoreModule.forRoot(reducers, {metaReducers}),
      StoreRouterConnectingModule.forRoot({stateKey: routerFeatureKey}),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
      {
          provide: RouteReuseStrategy,
          useClass: IonicRouteStrategy
      }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
