import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { FilmCardComponent } from './component/film-card/film-card.component';
import { CinemaCardComponent } from './component/cinema-card/cinema-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FilmFormComponent } from './component/film-form/film-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatExpansionModule,
        MatButtonModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatOptionModule,
    ],
    exports: [CinemaCardComponent, FilmCardComponent, FilmFormComponent],
    declarations: [CinemaCardComponent, FilmCardComponent, FilmFormComponent],
    providers: [],
})
export class SharedModule { }

