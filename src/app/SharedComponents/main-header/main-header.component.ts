import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  name: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
        this.router.navigate(['/busca/' + this.name]).then(() => {
          window.location.reload();
        });
    }
  }

}
