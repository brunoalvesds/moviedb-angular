import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMoviesService } from 'src/app/Services/get-movies/get-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResults = [];

  constructor(private getMoviesService: GetMoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    //Get the movie Name
    const movieName = this.route.snapshot.paramMap.get('name');

    //Search a movie
    this.getMoviesService.searchMovies(movieName).subscribe(
      (response: any) => {
        this.searchResults = response.results;
      }
    );
  }

}
