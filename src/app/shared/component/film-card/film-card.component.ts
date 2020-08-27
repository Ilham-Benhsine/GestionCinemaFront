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

  //dateHeureSeance = "";
  // on stock la date de la séance précédente du tableau dans cette variable pour pouvoir la comparer avec la suivante
  // si identique, on ajoute uniquement l'heure dans le tableau
  //dateSeancePrecedente = "";

  constructor(  private router: Router,
                private cinemaObservableService: CinemaObservableService 
              ) { }

  ngOnInit(): void {

    this.subscription$ = this.cinemaObservableService.getCinemaSubject().subscribe(
      (cinema: Cinema) => {

        // si cinema selectionné, afficher grille, cacher boutton
        if (cinema !== undefined && cinema !== null && Object.keys(cinema).length !== 0){
          document.getElementById("app-seances-table").style.display = "auto";
          document.getElementById("app-seances-boutton-cinema").style.display = "none";
        }
        
        // si pas de cinéma, afficher boutton, cacher grille
        if (Object.keys(cinema).length == 0) {
          document.getElementById("app-seances-table").style.display = "none";
          document.getElementById("app-seances-boutton-cinema").style.display = "auto";
        }
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
