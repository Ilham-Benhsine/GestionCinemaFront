import { Film } from './../beans/Film';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Cinema } from '../beans/Cinema';

@Injectable({
    providedIn: 'root'
})
export class CinemaWebService {

    baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getCinemasBack(): Observable<Cinema[]> {
        return this.http.get<Cinema[]>(this.baseUrl + 'cinema/');
    }
}
