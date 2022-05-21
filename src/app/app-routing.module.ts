import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RoutesEnum} from './shared/enums/routes.enum';

const routes: Routes = [
    {
        path: '',
        redirectTo: RoutesEnum.LANDING,
        pathMatch: 'full',
    },
    {
        path: RoutesEnum.LANDING,
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
        loadChildren: () => import('./pages/auth/reset-password/reset-password.module').then(m => m.ResetPasswordPageModule),
    },
    {
        path: 'verification',
        loadChildren: () => import('./pages/auth/verification/verification.module').then(m => m.VerificationPageModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
    },
    {
        path: 'show/:id',
        loadChildren: () => import('./pages/show/show/show.module').then(m => m.ShowPageModule)
    },
    {
        path: 'show/:mode/:id',
        loadChildren: () => import('./pages/show/show-create-edit/show-create-edit.module').then( m => m.ShowCreateEditPageModule)
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
