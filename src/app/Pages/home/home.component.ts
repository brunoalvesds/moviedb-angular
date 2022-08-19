import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/Services/get-movies/get-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nowPlayingList = [];
  upComingList = [];

  constructor(private getMoviesService: GetMoviesService) { }

  ngOnInit() {
      //Here we call service and list movies
    this.getMoviesService.getMovies('now_playing').subscribe(
        (response: any) => {
        this.nowPlayingList = response.results;
        console.log("res", response);
        },
    );

    this.getMoviesService.getMovies('upcoming').subscribe(
      (response: any) => {
        this.upComingList = response.results;
        console.log("res", response);
      },
    );
  }

}
