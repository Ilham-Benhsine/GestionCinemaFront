import { startWith } from 'rxjs/operators';
import { MatChipInputEvent, MatChipInput, MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
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
import { MatIconModule } from '@angular/material/icon';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { SeanceFormComponent } from './component/seance-form/seance-form.component';


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
        MatChipsModule,
        MatIconModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
    ],
    exports: [CinemaCardComponent, FilmCardComponent, FilmFormComponent],
    declarations: [CinemaCardComponent, FilmCardComponent, FilmFormComponent, SeanceFormComponent],
    providers: [],
})
export class SharedModule { }

