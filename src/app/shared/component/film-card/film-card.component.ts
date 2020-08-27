import { DialogDataExampleComponent } from './../dialog-data-example/dialog-data-example.component';
import { Cinema } from './../../beans/Cinema';
import { CinemaObservableService } from './../../observable/cinema-observable.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Film } from './../../beans/Film';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seance } from '../../beans/Seance';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input() film: Film;
  @Input() seances: Array<Seance>;
  @Input () dialog: DialogDataExampleComponent;
  @Output() eventEmiter = new EventEmitter<any>();

  panelOpenState = false;

  subscription$: Subscription;

  cinema: Cinema;

  constructor(  private router: Router,
                private cinemaObservableService: CinemaObservableService 
              ) { }

  ngOnInit(): void {

    this.subscription$ = this.cinemaObservableService.getCinemaSubject().subscribe(
      (cinema: Cinema) => {
        this.cinema = cinema;
      }, (error) => {
        // Error
        console.error('CallObservableComponent error', error);
      }, () => {
        // Complete
        console.log('CallObservableComponent Complete');
      }
    );
    
  }


  allerPageCinema() {
    this.router.navigate(['/cinema']);
    this.eventEmiter.emit('test');
  }

  allerPageConnection() {
    this.router.navigate(['/inscription']);
  }

}
