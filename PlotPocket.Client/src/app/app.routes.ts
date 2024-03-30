import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'media', loadChildren: () => import('./media-manager/media-manager.module').then(m => m.MediaManagerModule)}
];
