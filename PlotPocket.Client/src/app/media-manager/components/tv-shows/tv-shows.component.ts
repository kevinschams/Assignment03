import { Component, OnInit, inject } from '@angular/core';
import { TvShowsService } from '../../services/tvShow.service'; 
import { Observable } from 'rxjs';
import { Show } from '../../models/show';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css'],
})
export class TvShowsListComponent implements OnInit {
  private _tvShowsService = inject(TvShowsService); 
  public title: string = '';
  public airingToday$: Observable<Show[] | []> = this._tvShowsService.airingToday$; 
  public topRated$: Observable<Show[] | []> = this._tvShowsService.topRated$; 
  public popular$: Observable<Show[] | []> = this._tvShowsService.popular$; 

  public currentFilter: 'airingToday' | 'topRated' | 'popular' = 'airingToday'; 

  ngOnInit(): void {
    console.log("before");
    this.getAiringToday(); 
    console.log("after");
  }

  public getAiringToday(): void {
    this.title = "Now Playing TV Shows";
    this.currentFilter = 'airingToday';
    this._tvShowsService.getAiringToday(); 
  }

  public getTopRated(): void {
    this.title = "Top Rated TV Shows";
    this.currentFilter = 'topRated';
    this._tvShowsService.getTopRated();
  }

  public getPopular(): void {
    this.title = "Popular TV Shows";
    this.currentFilter = 'popular';
    this._tvShowsService.getPopular();
  }
}
