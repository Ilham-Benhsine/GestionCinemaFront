import { Seance } from './../beans/Seance';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SeanceWebService {

    baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getSeancesBack(): Observable<Seance[]> {
        return this.http.get<Seance[]>(this.baseUrl + 'seance/');
    }

    addSeance(seance: Seance): Observable<Seance> {
        return this.http.post<Seance>(this.baseUrl + 'seance/ajouter/', seance);
    }
}
