import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },    
    {path: 'media', loadChildren: () => import('./media-manager/media-manager.module').then(m => m.MediaManagerModule)},
    { path: '**', component: PageNotFoundComponent },
];
