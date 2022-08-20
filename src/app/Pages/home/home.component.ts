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
  slideConfig = { 
    slidesToShow: 4, 
    slidesToScroll: 4, 
    autoPlay: true, 
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  constructor(private getMoviesService: GetMoviesService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    
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
