import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { UtilisateurWebService } from './webService/utilisateur.webservice';
import { BrowserModule } from '@angular/platform-browser';
import { FilmComponent } from './../film/film.component';
import { FilmCardComponent } from './component/film-card/film-card.component';
import { CinemaCardComponent } from './component/cinema-card/cinema-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FilmFormComponent } from './component/film-form/film-form.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatExpansionModule,
        MatButtonModule
    ],
    exports: [CinemaCardComponent, FilmCardComponent, FilmFormComponent],
    declarations: [CinemaCardComponent, FilmCardComponent, FilmFormComponent, FilmFormComponent],
    providers: [],
})
export class SharedModule { }

