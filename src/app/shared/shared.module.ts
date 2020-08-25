import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';
import { FilmComponent } from './../film/film.component';
import { FilmCardComponent } from './component/film-card/film-card.component';
import { CinemaCardComponent } from './component/cinema-card/cinema-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatExpansionModule,
        MatButtonModule
    ],
    exports: [CinemaCardComponent, FilmCardComponent],
    declarations: [CinemaCardComponent, FilmCardComponent],
    providers: [],
})
export class SharedModule { }

