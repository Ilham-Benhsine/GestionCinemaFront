import { FilmComponent } from './../film/film.component';
import { FilmCardComponent } from './component/film-card/film-card.component';
import { CinemaCardComponent } from './component/cinema-card/cinema-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule
    ],
    exports: [CinemaCardComponent, FilmCardComponent],
    declarations: [CinemaCardComponent, FilmCardComponent],
    providers: [],
})
export class SharedModule { }

