import { Film } from './../shared/beans/Film';
import { FilmWebService } from './../shared/webService/film.webservice';
import { Component, OnInit } from '@angular/core';
import { Seance } from '../shared/beans/Seance';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  listeFilm: Array<Film> = [];
  listeFilmFiltree: Array<Film> = [];
  listeSeance: Array<Seance> = [];
  listeSeanceFiltree: Array<Seance> = [];

  constructor(
    private filmWebService: FilmWebService
  ) { }

  ngOnInit(): void {
    this.getFilms();
    this.getSeances();
  }

  getFilms(): void {
    this.filmWebService.getFilmsBack().subscribe(
      (data) => {
        console.log('TestWebServiceFilm', data);
        this.listeFilm = data;
        this.listeFilmFiltree = data;
      }
    );
  }

  /**
  * Méthode de récupération des séances dans la base
  */
  getSeances(): void {
    this.filmWebService.getSeancesBack().subscribe(
      (data) => {
        this.listeSeance = data;
        this.listeSeanceFiltree = data;
      }
    );
  }

  /**
   * Méthode qui retourne toutes les séances prévues pour un film
   * @param film : le film dont on veut retourner les séances
   */
  filtrerSeances(film: Film): Array<Seance> {
    return this.listeSeanceFiltree;
  }

}
