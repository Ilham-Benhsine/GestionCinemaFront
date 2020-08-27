import { Genre } from './../beans/Genre';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GenreWebService {

    baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getGenresBack(): Observable<Genre[]> {
        return this.http.get<Genre[]>(this.baseUrl + 'genre/');
    }

}
