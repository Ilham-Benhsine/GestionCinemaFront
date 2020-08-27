import { FilmCardComponent } from './../film-card/film-card.component';
import { Film } from './../../beans/Film';
import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Seance } from '../../beans/Seance';
import { FilmWebService } from '../../webService/film.webservice';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-data-example',
  templateUrl: './dialog-data-example.component.html',
  styleUrls: ['./dialog-data-example.component.scss']
})
export class DialogDataExampleComponent implements OnInit {

  listeFilm: Array<Film> = [];
  listeFilmFiltree: Array<Film> = [];
  listeSeance: Array<Seance> = [];
  listeSeanceFiltree: Array<Seance> = [];
  listeFilmFiltreeALAffiche: Film[];
  listeFilmALAffiche: Film[];
  @Input() film: Film = this.data;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private filmWebService: FilmWebService) { }


  ngOnInit(): void {
   /* this.getFilms();
    this.getSeances();*/
    console.log('item', this.data);
  }

 /* getFilmALAffiche(): void {
    this.filmWebService.getFilmsBack().subscribe(
      (data) => {
       // console.log('TestWebServiceFilm', data);
        this.listeFilmALAffiche = data;

      }
    );
  }*/
}
