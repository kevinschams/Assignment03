import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingListComponent } from './components/trending-list/trending-list.component';
import { MoviesListComponent } from './components/movies/movies.component';
import { TvShowsListComponent } from './components/tv-shows/tv-shows.component';

const routes: Routes = [
  {path: 'trending', component: TrendingListComponent},
  {path: 'movies', component: MoviesListComponent},
  {path: 'tvshows', component: TvShowsListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaManagerRoutingModule { }
