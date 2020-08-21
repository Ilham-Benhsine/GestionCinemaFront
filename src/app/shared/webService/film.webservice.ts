import { Film } from './../beans/Film';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilmWebService {

    baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getFilms(): Observable<Film[]> {
        return this.http.get<Film[]>(this.baseUrl + 'film/');
    }
}
