import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMoviesService } from 'src/app/Services/get-movies/get-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResults = [];
  isMobile:boolean = false;
  windowWidth: number = 1170;
  slideConfig = {
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  //Check window width for mobile detects
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = window.innerWidth;
    if(this.windowWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  constructor(private getMoviesService: GetMoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Check mobile and scroll to top
    if (this.windowWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

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
