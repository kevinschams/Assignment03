import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'media', loadChildren: () => import('./media-manager/media-manager.module').then(m => m.MediaManagerModule)}
];
