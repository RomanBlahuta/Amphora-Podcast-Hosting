import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './services/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full',
    },
    {
        path: 'landing',
        loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule),
    },
    {
        path: 'sign-in',
        loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInPageModule),
    },
    {
        path: 'sign-up',
        loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpPageModule),
    },
    {
        path: 'not-found',
        loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule),
    },
    {
        path: 'reset-password',
        loadChildren: () => import('./pages/auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule),
    },
    {
        path: 'verification',
        loadChildren: () => import('./pages/auth/verification/verification.module').then(m => m.VerificationPageModule),
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
    },
    {
        path: 'show/:id',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./pages/show/show/show.module').then(m => m.ShowPageModule)
    },
    {
        path: 'show/:mode/:id',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./pages/show/show-create-edit/show-create-edit.module').then( m => m.ShowCreateEditPageModule)
    },
    {
        path: 'episode/:mode/:id',
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
