import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Pages/search/search.component';
import { DetailsComponent } from './Pages/details/details.component';
import { MainHeaderComponent } from './SharedComponents/main-header/main-header.component';
import { CardMovieComponent } from './SharedComponents/card-movie/card-movie.component';
import { InputSearchComponent } from './SharedComponents/input-search/input-search.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
    MainHeaderComponent,
    CardMovieComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
