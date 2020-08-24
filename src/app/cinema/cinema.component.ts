import { CinemaWebService } from './../shared/webService/cinema.webservice';
import {Component, OnInit} from '@angular/core';
import { Cinema } from '../shared/beans/Cinema';
/*import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';*/


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  //myControl = new FormControl();
  /*options: string[] = ['UGC Ciné Cité Les Halles', 'Mk2 Bibliothèque - Paris', 'UGC Ciné Cité Bercy - Paris', 'Gaumont Aquaboulevard - Paris', 'Mégarama - Villeneuve-la-Garenne', 'Pathé Multiplexe - Échirolles', 'Pathé Chavant - Grenoble',
  'Pathé Bellecour - Lyon', 'Ciné Liberté - Brest', 'Gaumont Multiplexe - Rennes', 'Méga CGR - Rennes', 'Cinéville - Lorient', 'Cinéville - Quimper',
  'Pathé Docks 76 - Rouen'];*/
  //filteredOptions: Observable<string[]>;

  listeCinema: Array<Cinema> = [];
  listeCinemaFiltree: Array<Cinema> = [];
  //cinemaChoisis: any;
  filtre: string;

  constructor(
    private cinemaWebService: CinemaWebService
  ) { }

  ngOnInit(): void {
    this.getCinemas();

    /*this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );*/
  }

  
  filtrerListeCinemas(){
    this.listeCinemaFiltree = this.listeCinemaFiltree.filter(cinema => cinema.nom.toLowerCase().trim().includes(this.filtre.toLowerCase().trim()));
  }

  /*private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }*/
  
  getCinemas(): void {
    this.cinemaWebService.getCinemasBack().subscribe(
      (data) => {
        this.listeCinema = data;
        this.listeCinemaFiltree = data;
      }
    );
  }
  
}