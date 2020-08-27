import { CinemaWebService } from './../shared/webService/cinema.webservice';
import {Component, OnInit} from '@angular/core';
import { Cinema } from '../shared/beans/Cinema';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  listeCinema: Array<Cinema> = [];
  listeCinemaFiltree: Array<Cinema> = [];
  filtre: string;

  constructor(
    private cinemaWebService: CinemaWebService
  ) { }

  ngOnInit(): void {
    this.getCinemas();
  }

  /**
   * Méthode de filtrage de la liste de cinémas en fonction de la saisie utilisateur
   */
  filtrerListeCinemas(){
    // réinitialisation de la liste à chaque modification, pour que la liste puisse s'agrandir si l'utilisateur corrige (efface) sa saisie
    for (let index = 0; index < this.listeCinema.length; index++) {
      this.listeCinemaFiltree[index] = this.listeCinema[index];
    }
    // filtrage
    this.listeCinemaFiltree = this.listeCinemaFiltree.filter(cinema => cinema.nom.toUpperCase().trim().includes(this.filtre.toUpperCase().trim()));
    console.log(this.listeCinemaFiltree);
  }
  
  /**
   * Méthode de récupération des cinémas dans la base
   */
  getCinemas(): void {
    this.cinemaWebService.getCinemasBack().subscribe(
      (data) => {
        this.listeCinema = data;
        this.listeCinemaFiltree = data;
      }
    );
  }
  
}