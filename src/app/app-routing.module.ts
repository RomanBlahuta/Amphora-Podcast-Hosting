import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './services/guards/auth.guard';
import {getRootRouteRedirect} from './shared/utils/utils';
import {RoutesEnum} from './shared/enums/routes.enum';
import {VerificationGuardService} from './services/guards/verification.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: getRootRouteRedirect(),
        pathMatch: 'full',
    },
    {
        path: RoutesEnum.LANDING,
        loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule),
    },
    {
        path: RoutesEnum.SIGN_IN,
        loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInPageModule),
    },
    {
        path: RoutesEnum.SIGN_UP,
        loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpPageModule),
    },
    {
        path: RoutesEnum.NOT_FOUND,
        loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule),
    },
    {
        path: RoutesEnum.RESET_PASSWORD,
        loadChildren: () => import('./pages/auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
    },
    {
        path: RoutesEnum.FORGOT_PASSWORD,
        loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule),
    },
    {
        path: RoutesEnum.VERIFICATION,
        loadChildren: () => import('./pages/auth/verification/verification.module').then(m => m.VerificationPageModule),
    },
    {
        path: RoutesEnum.DASHBOARD,
        canActivate: [AuthGuardService],
        loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
    },
    {
        path: `${RoutesEnum.SHOW}/:id`,
        canActivate: [AuthGuardService, VerificationGuardService],
        loadChildren: () => import('./pages/show/show/show.module').then(m => m.ShowPageModule)
    },
    {
        path: `${RoutesEnum.SHOW}/:mode/:id`,
        canActivate: [AuthGuardService, VerificationGuardService],
        loadChildren: () => import('./pages/show/show-create-edit/show-create-edit.module').then( m => m.ShowCreateEditPageModule)
    },
    {
        path: `${RoutesEnum.EPISODE}/:showId/:mode/:episodeId`,
        canActivate: [AuthGuardService, VerificationGuardService],
        loadChildren: () =>
            import('./pages/episode/episode-create-edit/episode-create-edit.module').then( m => m.EpisodeCreateEditPageModule)
    },
    {
        path: '**',
        loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundPageModule),
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
