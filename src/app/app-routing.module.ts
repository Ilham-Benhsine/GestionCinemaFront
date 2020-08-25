import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { ProflComponent } from './profl/profl.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CinemaComponent } from './cinema/cinema.component';
import { FilmComponent } from './film/film.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'film', component: FilmComponent },
  { path: 'cinema', component: CinemaComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'profil', component: ProflComponent },
  { path: 'deconnexion', component: DeconnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
