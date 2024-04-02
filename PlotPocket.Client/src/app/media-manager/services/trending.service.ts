import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private _http = inject(HttpClient); // Will make async requests to server.

  private _trendingListSubject: BehaviorSubject<Show[] | []> = new BehaviorSubject<Show[] | []>([] as Show[]);
  private _trendingMoviesSubject: BehaviorSubject<Show[] | []> = new BehaviorSubject<Show[] | []>([] as Show[]);
  private _trendingTvShowsSubject: BehaviorSubject<Show[] | []> = new BehaviorSubject<Show[] | []>([] as Show[]);

 

  public trendingList$: Observable<Show[] | []> = this._trendingListSubject.asObservable();
  public trendingMovies$: Observable<Show[] | []> = this._trendingMoviesSubject.asObservable();
  public trendingTvShows$: Observable<Show[] | []> = this._trendingTvShowsSubject.asObservable();



  constructor() { }


  public getAllTrending(): void {
    this._http.get<Show[]>(`/api/trending`).subscribe(showList => {
      this._trendingListSubject.next(showList);
    });
  }

  public getAllTrendingMovies(): void {
    this._http.get<Show[]>(`/api/trending/movies`).subscribe(showList => {
      this._trendingMoviesSubject.next(showList);
    });
  }

  public getAllTrendingTvShows(): void {
    this._http.get<Show[]>(`/api/trending/tvshows`).subscribe(showList => {
      this._trendingTvShowsSubject.next(showList);
    });
  }


}
