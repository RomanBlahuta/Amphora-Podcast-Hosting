import {ErrorHandler, NgModule} from '@angular/core';
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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignInEffects} from './store/sign-in/sign-in.effects';
import {SignUpEffects} from './store/sign-up/sign-up.effects';
import {ForgotPasswordEffects} from './store/forgot-password/forgot-password.effects';
import {VerificationEffects} from './store/verification/verification.effects';
import {GlobalErrorHandler} from './services/error-handlers/global.error-handler';
import {AmphoraErrorPopUpModule} from './components/pop-ups/amphora-error-pop-up/amphora-error-pop-up.module';
import {DashboardEffects} from './store/dashboard/dashboard.effects';
import {ShowEffects} from './store/show/show.effects';
import {AuthInterceptor} from './services/interceptors/auth.interceptor';
import {ResetPasswordEffects} from './store/reset-password/reset-password.effects';
import {AuthGuardService} from './services/guards/auth.guard';
import {ShowCreateEditEffects} from './store/show-create-edit/show-create-edit.effects';
import {UserEffects} from './store/user/user.effects';
import {EpisodeCreateEditEffects} from './store/episode-create-edit/episode-create-edit.effects';
import {LandingEffects} from './store/landing/landing.effects';
import {VerificationGuardService} from './services/guards/verification.guard';

export const EFFECTS = [
    LandingEffects,
    SignInEffects,
    SignUpEffects,
    ResetPasswordEffects,
    ForgotPasswordEffects,
    UserEffects,
    VerificationEffects,
    DashboardEffects,
    EpisodeCreateEditEffects,
    ShowEffects,
    ShowCreateEditEffects,
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
        AmphoraErrorPopUpModule,
    ],
    providers: [
        AuthGuardService,
        VerificationGuardService,
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
