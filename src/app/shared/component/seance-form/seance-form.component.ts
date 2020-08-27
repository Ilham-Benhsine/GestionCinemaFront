import { SeanceWebService } from './../../webService/seance.webservice';
import { Observable } from 'rxjs';
import { Film } from './../../beans/Film';
import { FilmWebService } from './../../webService/film.webservice';
import { Component, OnInit } from '@angular/core';
import { Seance } from '../../beans/Seance';
import { FormControl } from '@angular/forms';

import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-seance-form',
  templateUrl: './seance-form.component.html',
  styleUrls: ['./seance-form.component.scss']
})
export class SeanceFormComponent implements OnInit {

  nouvelleSeance = new Seance();
  listeFilms = new Array<Film>();
  controleTitre = new FormControl();
  controleDate = new FormControl();
  controleTime = new FormControl();
  filteredFilms: Observable<Film[]>;
  dateString: string;

  constructor(
    private filmWebService: FilmWebService,
    private seanceWebService: SeanceWebService
  ) {
    this.filteredFilms = this.controleTitre.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  ngOnInit(): void {
    this.getFilms();
  }

  ajouterNouvelleSeance(): void {
    console.log(this.controleDate.value);
    console.log(this.controleTime.value);
    this.dateString = this.controleDate.value + 'T' + this.controleTime.value;
    console.log(this.dateString);
    this.nouvelleSeance.horaire = new Date(this.dateString);
    this.seanceWebService.addSeance(this.nouvelleSeance).subscribe(
      (seanceReturn) => {
        console.log('TestWebServiceSeance', seanceReturn);
      }
    );
  }

  selected(id: number): void {
    this.nouvelleSeance.film.id = id;
  }

  getFilms(): void {
    this.filmWebService.getFilmsBack().subscribe(
      (data) => {
        console.log('TestWebServiceFilm', data);
        this.listeFilms = data;
      }
    );
  }

  private _filter(value: string): Film[] {
    const filterValue = value.toLowerCase();
    return this.listeFilms.filter(film => film.titre.toLowerCase().indexOf(filterValue) === 0);
  }
}
