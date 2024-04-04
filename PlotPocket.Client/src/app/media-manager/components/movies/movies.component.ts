import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service'; 
import { Observable } from 'rxjs';
import { Show } from '../../models/show';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesListComponent implements OnInit {
  private _moviesService = inject(MovieService); 
  public title: string = '';
  public nowPlaying$: Observable<Show[] | []> = this._moviesService.nowPlaying$; 
  public topRated$: Observable<Show[] | []> = this._moviesService.topRated$; 
  public popular$: Observable<Show[] | []> = this._moviesService.popular$; 

  public currentFilter: 'nowPlaying' | 'topRated' | 'popular' = 'nowPlaying'; 

  ngOnInit(): void {
    console.log("before");
    this.getNowPlaying(); 
    console.log("after");
  }

  public getNowPlaying(): void {
    this.title = "Now Playing Movies";
    this.currentFilter = 'nowPlaying';
    this._moviesService.getNowPlayingMovies();
  }

  public getTopRated(): void {
    this.title = "Top Rated Movies";
    this.currentFilter = 'topRated';
    this._moviesService.getTopRatedMovies();
  }

  public getPopular(): void {
    this.title = "Popular Movies";
    this.currentFilter = 'popular';
    this._moviesService.getPopularMovies(); 
  }
}
