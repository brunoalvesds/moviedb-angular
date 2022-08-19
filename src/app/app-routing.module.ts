import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './Pages/details/details.component';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Pages/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
