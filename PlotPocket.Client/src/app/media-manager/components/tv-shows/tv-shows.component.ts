import { Component, OnInit, inject } from '@angular/core';
import { TvShowsService } from '../../services/tvShow.service'; // Import the TvShowsService
import { Observable } from 'rxjs';
import { Show } from '../../models/show';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsListComponent implements OnInit {
  private _tvShowsService = inject(TvShowsService); // Inject the TvShowsService
  public title: string = '';
  public airingToday$: Observable<Show[] | []> = this._tvShowsService.airingToday$; // Use nowPlaying$ from TvShowsService
  public topRated$: Observable<Show[] | []> = this._tvShowsService.topRated$; // Use topRated$ from TvShowsService
  public popular$: Observable<Show[] | []> = this._tvShowsService.popular$; // Use popular$ from TvShowsService

  public currentFilter: 'airingToday' | 'topRated' | 'popular' = 'airingToday'; // Initialize currentFilter

  ngOnInit(): void {
    console.log("before");
    this.getAiringToday(); // Call getNowPlaying() on initialization
    console.log("after");
  }

  public getAiringToday(): void {
    this.title = "Now Playing TV Shows";
    this.currentFilter = 'airingToday';
    this._tvShowsService.getAiringToday(); // Call getNowPlaying() from TvShowsService
  }

  public getTopRated(): void {
    this.title = "Top Rated TV Shows";
    this.currentFilter = 'topRated';
    this._tvShowsService.getTopRated(); // Call getTopRated() from TvShowsService
  }

  public getPopular(): void {
    this.title = "Popular TV Shows";
    this.currentFilter = 'popular';
    this._tvShowsService.getPopular(); // Call getPopular() from TvShowsService
  }
}
