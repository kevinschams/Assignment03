import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  private _http: HttpClient;

  private _airingTodaySubject: BehaviorSubject<Show[] | []> = new BehaviorSubject<Show[] | []>([] as Show[]);
  private _popularSubject: BehaviorSubject<Show[] | []> = new BehaviorSubject<Show[] | []>([] as Show[]);
  private _topRatedSubject: BehaviorSubject<Show[] | []> = new BehaviorSubject<Show[] | []>([] as Show[]);

  public airingToday$: Observable<Show[] | []> = this._airingTodaySubject.asObservable();
  public popular$: Observable<Show[] | []> = this._popularSubject.asObservable();
  public topRated$: Observable<Show[] | []> = this._topRatedSubject.asObservable();

  constructor(http: HttpClient) {
    this._http = http;
  }

  public getAiringToday(): void {
    this._http.get<Show[]>(`/api/tvshows/airing-today`).subscribe(tvShows => {
      this._airingTodaySubject.next(tvShows);
    });
  }

  public getPopular(): void {
    this._http.get<Show[]>(`/api/tvshows/popular`).subscribe(tvShows => {
      this._popularSubject.next(tvShows);
    });
  }

  public getTopRated(): void {
    this._http.get<Show[]>(`/api/tvshows/top-rated`).subscribe(tvShows => {
      this._topRatedSubject.next(tvShows);
    });
  }
}
