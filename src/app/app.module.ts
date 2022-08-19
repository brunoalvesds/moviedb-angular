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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
