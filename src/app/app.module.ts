import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { FilmComponent } from './film/film.component';
import { CinemaComponent } from './cinema/cinema.component';
import { FilmCardComponent } from './shared/component/film-card/film-card.component';
import { CinemaCardComponent } from './shared/component/cinema-card/cinema-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FilmComponent,
    CinemaComponent,
    FilmCardComponent,
    CinemaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
