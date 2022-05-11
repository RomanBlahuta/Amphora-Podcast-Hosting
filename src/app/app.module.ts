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
import {metaReducers, appReducers, routerFeatureKey} from './store/app.store';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignInEffects} from './store/sign-in/sign-in.effects';
import {SignUpEffects} from './store/sign-up/sign-up.effects';
import {ResetPasswordEffects} from './store/reset-password/reset-password.effects';

export const EFFECTS = [
    SignInEffects,
    SignUpEffects,
    ResetPasswordEffects,
];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      HttpClientModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      EffectsModule.forRoot(EFFECTS),
      StoreModule.forRoot(appReducers, {metaReducers}),
      StoreRouterConnectingModule.forRoot({stateKey: routerFeatureKey}),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
      BrowserAnimationsModule,
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
