import { Routes } from '@angular/router';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AdminGuard } from './shared/auth.guard/auth.guard';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { contentRoutes } from './shared/routes/routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home/classic',
        pathMatch: 'full',
    },
    {
        path: 'auth/login',
        component: AuthLoginComponent,
    },
    {
        path: '',
        component: ContentComponent,
        children: contentRoutes,
        canActivate: [AdminGuard],
    },
    { path: '**', redirectTo: 'pages/404' }

];
