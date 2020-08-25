import { Utilisateur } from './../beans/Utilisateur';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilisateurWebService {

    baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) { }

    getUtilisateur(util: Utilisateur): Observable<Utilisateur> {
        return this.http.post<Utilisateur>(this.baseUrl + 'utilisateur/connexion/', util);
    }

    addUtilisateur(util: Utilisateur): Observable<Utilisateur> {
        return this.http.post<Utilisateur>(this.baseUrl + 'utilisateur/inscription/', util);
    }
}
