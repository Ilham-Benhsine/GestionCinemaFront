import { CinemaComponent } from './cinema/cinema.component';
import { FilmComponent } from './film/film.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  {path: 'accueil', component: AccueilComponent},
  {path: 'film', component: FilmComponent},
  {path: 'cinema', component: CinemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
