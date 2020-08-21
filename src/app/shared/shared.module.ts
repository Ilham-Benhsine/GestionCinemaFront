import { FilmCardComponent } from './component/film-card/film-card.component';
import { CinemaCardComponent } from './component/cinema-card/cinema-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule],
    exports: [CinemaCardComponent, FilmCardComponent],
    declarations: [CinemaCardComponent, FilmCardComponent],
    providers: [],
})
export class SharedModule { }

