import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaManagerRoutingModule } from './media-manager-routing.module';
import { TrendingListComponent } from './components/trending-list/trending-list.component';
import { MovieService } from './services/movie.service';
import { MoviesListComponent } from './components/movies/movies.component';
import { TvShowsListComponent } from './components/tv-shows/tv-shows.component';
import { AppShowCardComponent } from './components/app-show-card/app-show-card.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TrendingListComponent,
    MoviesListComponent,
    TvShowsListComponent,
    AppShowCardComponent
  ],
  imports: [
    CommonModule,
    MediaManagerRoutingModule
  ]
})
export class MediaManagerModule { }
