import { GenreWebService } from './../../webService/genre.webservice';
import { FilmWebService } from './../../webService/film.webservice';
import { Film } from './../../beans/Film';
import { Genre } from '../../beans/Genre';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.scss']
})
export class FilmFormComponent implements OnInit {

  nouveauFilm = new Film();
  listeGenres = new Array<Genre>();

  constructor(
    private filmWebService: FilmWebService,
    private genreWebService: GenreWebService
  ) { }

  ngOnInit(): void {
    this.getGenres();
  }

  ajouterNouveauFilm(film: Film): void {
    this.filmWebService.addFilm(film).subscribe(
      (filmReturn) => {
        console.log('TestWebServiceFilm', filmReturn);
      }
    );
  }

  getGenres(): void {
    this.genreWebService.getGenresBack().subscribe(
      (genresReturn) => {
        this.listeGenres = genresReturn;
      }
    );
  }

}
