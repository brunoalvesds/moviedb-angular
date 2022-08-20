import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/Interfaces/movie';
import { GetMoviesService } from 'src/app/Services/get-movies/get-movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  recommendedList: Array<any> = [];
  movieInfo: IMovie = {
    backdrop_path: '',
    overview: '',
    id: 0,
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: 0
  }

  //Carousel config
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

  constructor(private getMoviesService: GetMoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    //Get the movie ID
    const movieId = this.route.snapshot.paramMap.get('id');

    //Get movie Details
    this.getMoviesService.getDetails(movieId).subscribe(
      (response: any) => {
        this.movieInfo = response;
      }
    );

    //Get recommendations with the movie ID
    this.getMoviesService.getRecommendation(movieId).subscribe(
      (response: any) => {
        this.recommendedList = response.results;
      }
    );
  }
}
