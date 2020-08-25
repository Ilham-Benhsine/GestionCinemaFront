import { Utilisateur } from './../beans/Utilisateur';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtilisateurObservableService {

    utilisateurBehaviorSubject$ = new BehaviorSubject<Utilisateur>(new Utilisateur());

    getUtilisateurSubject(): Observable<Utilisateur> {
        return this.utilisateurBehaviorSubject$.asObservable();
    }

    setUtilisateurSubject(utilisateur: Utilisateur): void {
        this.utilisateurBehaviorSubject$.next(utilisateur);
    }

}
