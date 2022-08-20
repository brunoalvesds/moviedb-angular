import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {
  @Input() data: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoDetail(id: string): void {
    this.router.navigate(['/detalhes/' + id]).then(() => {
      window.location.reload();
    });
  }

}
