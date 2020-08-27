import { Salle } from './../beans/Salle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SalleWebService {

    baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getSallesBack(): Observable<Salle[]> {
        return this.http.get<Salle[]>(this.baseUrl + 'salle/');
    }
}