import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Show } from '../models/show';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _http: HttpClient;

  private _nowPlayingSubject: BehaviorSubject<Show[] | []> = new BehaviorSubject<Show[] | []>([] as Show[]);
  private _topRatedSubject: BehaviorSubject<Show[] | []> = new BehaviorSubject<Show[] | []>([] as Show[]);
  private _popularSubject: BehaviorSubject<Show[] | []> = new BehaviorSubject<Show[] | []>([] as Show[]);

  public nowPlaying$: Observable<Show[] | []> = this._nowPlayingSubject.asObservable();
  public topRated$: Observable<Show[] | []> = this._topRatedSubject.asObservable();
  public popular$: Observable<Show[] | []> = this._popularSubject.asObservable();

  constructor(private http: HttpClient) {
    this._http = http;
  }

  public getNowPlayingMovies(): void {
    this._http.get<Show[]>(`/api/movies/now-playing`).subscribe(showList => {
      this._nowPlayingSubject.next(showList);
    });
  }

  public getTopRatedMovies(): void {
    this._http.get<Show[]>(`/api/movies/top-rated`).subscribe(showList => {
      this._topRatedSubject.next(showList);
    });
  }

  public getPopularMovies(): void {
    this._http.get<Show[]>(`/api/movies/popular`).subscribe(showList => {
      this._popularSubject.next(showList);
    });
  }
}
