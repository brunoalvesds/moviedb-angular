import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from 'src/app/Interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  private url = 'https://api.themoviedb.org/3/movie/';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '32b2538fae9d6a2e14d1539dde85893f';

  constructor(private http: HttpClient) {
  }

  getMovies() {
    let moviesUrl = `${this.url}popular?api_key=${this.apiKey}`;

    return this.http.get(moviesUrl).subscribe(
      res => {
        console.log("res: ", res);
      },
      error => {
        
      }
    );
  }

  searchMovies(query: string) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&query=${query}`;

    return this.http.get(searchUrl)
      .subscribe(
        res => {
          console.log("res: ", res);
        },
        error => {
          
        }
      );
  }

  getDetails(id: number) {
    let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}`;

    return this.http.get(detailsUrl)
      .subscribe(
        res => {
          console.log("res: ", res);
        },
        error => {
          
        }
      );
  }
}
