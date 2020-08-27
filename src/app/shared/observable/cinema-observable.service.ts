import { Cinema } from './../beans/Cinema';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CinemaObservableService {

    cinemaBehaviorSubject$ = new BehaviorSubject<Cinema>(new Cinema());

    getCinemaSubject(): Observable<Cinema> {
        return this.cinemaBehaviorSubject$.asObservable();
    }

    setCinemaSubject(cinema: Cinema): void {
        this.cinemaBehaviorSubject$.next(cinema);
    }

}