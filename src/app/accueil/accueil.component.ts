import { FilmWebService } from './../shared/webService/film.webservice';
import { FilmComponent } from './../film/film.component';
import { Film } from './../shared/beans/Film';
import { DialogDataExampleComponent } from './../shared/component/dialog-data-example/dialog-data-example.component';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResizedEvent } from 'angular-resize-event';




@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  listeFilmALAffiche: Array<Film>;
  film: Film;
  width = 300;
  height: number;

  constructor(
    public dialog: MatDialog,
    private filmWebService: FilmWebService,

  ) { }

  ngOnInit(): void {
    this.getFilmALAffiche();
    console.log(this.listeFilmALAffiche);

  }

  getFilmALAffiche(): void {
    this.filmWebService.getFilmsALAfficheBack().subscribe(
      (data) => {
        console.log('TestWebServiceFilm', data);
        this.listeFilmALAffiche = data  ;
        console.log(this.listeFilmALAffiche);
      }
    );
  }

  // tslint:disable-next-line: typedef
  openDialog(filmClick: Film) {
    console.log(filmClick);
    this.dialog.open(DialogDataExampleComponent, {
      data: {
        film: filmClick,

      }
    });
  }

}
