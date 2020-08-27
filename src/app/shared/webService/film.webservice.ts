import { Seance } from './../beans/Seance';
import { Film } from './../beans/Film';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilmWebService {

    baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getFilmsBack(): Observable<Film[]> {
        return this.http.get<Film[]>(this.baseUrl + 'film/');
    }

    addFilm(film: Film): Observable<Film> {
        return this.http.post<Film>(this.baseUrl + 'film/ajouter/', film);
    }
    getFilmsALAfficheBack(): Observable<Film[]> {
        return this.http.get<Film[]>(this.baseUrl + 'film/alaffiche');
    }
}
