import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service'; // Import the MoviesService
import { Observable } from 'rxjs';
import { Show } from '../../models/show';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesListComponent implements OnInit {
  private _moviesService = inject(MovieService); // Inject the MoviesService
  public title: string = '';
  public nowPlaying$: Observable<Show[] | []> = this._moviesService.nowPlaying$; // Use nowPlaying$ from MoviesService
  public topRated$: Observable<Show[] | []> = this._moviesService.topRated$; // Use topRated$ from MoviesService
  public popular$: Observable<Show[] | []> = this._moviesService.popular$; // Use popular$ from MoviesService

  public currentFilter: 'nowPlaying' | 'topRated' | 'popular' = 'nowPlaying'; // Initialize currentFilter

  ngOnInit(): void {
    console.log("before");
    this.getNowPlaying(); // Call getNowPlaying() on initialization
    console.log("after");
  }

  public getNowPlaying(): void {
    this.title = "Now Playing Movies";
    this.currentFilter = 'nowPlaying';
    this._moviesService.getNowPlayingMovies(); // Call getNowPlaying() from MoviesService
  }

  public getTopRated(): void {
    this.title = "Top Rated Movies";
    this.currentFilter = 'topRated';
    this._moviesService.getTopRatedMovies(); // Call getTopRated() from MoviesService
  }

  public getPopular(): void {
    this.title = "Popular Movies";
    this.currentFilter = 'popular';
    this._moviesService.getPopularMovies(); // Call getPopular() from MoviesService
  }
}
