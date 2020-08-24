//import { SharedModule } from './../shared/shared.module';
import { FilmWebService } from './../shared/webService/film.webservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  filmList: any[];

  constructor(
    private filmWebService: FilmWebService
  ) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmWebService.getFilmsBack().subscribe(
      (data) => {
        console.log('TestWebServiceFilm', data);
        this.filmList = data;
      }
    );
  }

}
