import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { authGuard } from './guards/auth.guard';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'browse',
        component: BrowseComponent,
        canActivate: [authGuard]
    },
    {
        path: 'browse/:id',
        component: MovieDetailsComponent,
        canActivate: [authGuard]
    },
    {
        path: "**",
        redirectTo: '/login'
    }

];
