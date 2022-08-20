import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  private url = 'https://api.themoviedb.org/3/movie/';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '32b2538fae9d6a2e14d1539dde85893f';

  constructor(private http: HttpClient) {
  }

  getMovies(category: string) {
    let moviesUrl = `${this.url + category}?api_key=${this.apiKey}&language=pt-BR`;

    return this.http.get(moviesUrl);
  }

  searchMovies(query: string) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&query=${query}&language=pt-BR`;

    return this.http.get(searchUrl)
      .subscribe(
        res => {
          console.log("res: ", res);
        },
        error => {
          
        }
      );
  }

  getDetails(id: any) {
    let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}&language=pt-BR`;
    

    return this.http.get(detailsUrl);
  }

  getRecommendation(id: any) {
    console.log("chamou");
    let recommendationsUrl = `${this.url}${id}/recommendations?api_key=${this.apiKey}&language=pt-BR`;

    return this.http.get(recommendationsUrl);
  }
}
