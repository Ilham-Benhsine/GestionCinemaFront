import { SeanceWebService } from './../shared/webService/seance.webservice';
import { SalleWebService } from './../shared/webService/salle.webservice';
import { Cinema } from './../shared/beans/Cinema';
import { Subscription } from 'rxjs';
import { CinemaObservableService } from './../shared/observable/cinema-observable.service';
import { Film } from './../shared/beans/Film';
import { FilmWebService } from './../shared/webService/film.webservice';
import { Component, OnInit } from '@angular/core';
import { Seance } from '../shared/beans/Seance';
import { Salle } from '../shared/beans/Salle';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  listeFilm: Array<Film> = [];
  listeFilmFiltree: Array<Film> = [];

  listeSeance: Array<Seance> = [];
  listeSeanceFiltree: Array<Seance> = [];
  listeSeanceFiltreeFilm: Array<Seance> = [];

  listeSalle: Array<Salle> = [];

  subscription$: Subscription;

  constructor(
    private filmWebService: FilmWebService,
    private cinemaObservableService: CinemaObservableService,
    private salleWebService: SalleWebService,
    private seanceWebService: SeanceWebService
  ) { }

  ngOnInit(): void {
    this.getSalles();
  }

  ngOnDestroy() {
      if (this.subscription$) {
        this.subscription$.unsubscribe();
      }
  }

  getSalles(): void {
    this.salleWebService.getSallesBack().subscribe(
      (data) => {
        this.listeSalle = data;
        this.getFilms();
      }
    );
  }

  getFilms(): void {
    this.filmWebService.getFilmsBack().subscribe(
      (data) => {
        this.listeFilm = data;
  
        // filtrage par cinema
        this.subscription$ = this.cinemaObservableService.getCinemaSubject().subscribe(
          (cinemaFiltre: Cinema) => {
            
            // test si un cinéma est sélectionné pour filtrer
            if (cinemaFiltre !== undefined && cinemaFiltre !== null && Object.keys(cinemaFiltre).length !== 0){
              var filmDejaPresent = false;
              
              // on ajoute uniquement les films qui ont une séance dans ce cinéma
              // pour chaque seance de chaque salle de ce cinéma ...
              cinemaFiltre.salles.forEach(salle => {
                salle.seances.forEach(seance => {
                  // ... on boucle sur les films déjà enregistré pour ne pas le rentrer 2 fois
                  this.listeFilmFiltree.forEach(film => {
                    if(seance?.film.id === film.id) {
                      filmDejaPresent = true;
                    }
                  });
                  // on ajoute le film à la liste si pas déjà présent
                  if (!filmDejaPresent) {
                    this.listeFilmFiltree.push(seance?.film);
                  } else {
                    filmDejaPresent = false;
                  }
                });
              });
              
            }
            // si pas de cinéma sélectionné, afficher tous les films
            if (Object.keys(cinemaFiltre).length == 0) {
              
              
              this?.listeFilm.forEach(film => {
                this.listeFilmFiltree.push(film);
                
              });
              
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
    );
    this.getSeances();
  }

   /**
   * Méthode de récupération des séances dans la base
   */
  getSeances(): void {
    this.seanceWebService.getSeancesBack().subscribe(
      (data) => {
        this.listeSeance = data;
        this.listeSeanceFiltree = data;
        
        
        this.subscription$ = this.cinemaObservableService.getCinemaSubject().subscribe(
          (cinemaFiltre: Cinema) => {
            if (cinemaFiltre !== undefined && cinemaFiltre !== null && Object.keys(cinemaFiltre).length !== 0){
              // on efface la liste de séances globales
              this.listeSeanceFiltree.splice(0);
              // on ajoute les séances uniquement du cinéma
              cinemaFiltre.salles.forEach(salle => {
                salle.seances.forEach(seance => {
                  this.listeSeanceFiltree.push(seance);
                });
              });
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
    );
  }

  /**
   * Méthode qui retourne toutes les séances prévues pour un film dans un cinéma
   * @param film : le film dont on veut retourner les séances
   * retourne un tableau vide si pas de cinéma sélectionné
   */
  filtrerSeances(film: Film): Array<Seance> {

    /*for (let index = 0; index < this.listeSeance.length; index++) {
      this.listeSeanceFiltree[index] = this.listeSeance[index];
    }*/

    this.subscription$ = this.cinemaObservableService.getCinemaSubject().subscribe(
      (cinemaFiltre: Cinema) => {
        
        // test si un cinéma est sélectionné pour filtrer
        if (cinemaFiltre !== undefined && cinemaFiltre !== null && Object.keys(cinemaFiltre).length !== 0){       
          this.listeSeanceFiltree.filter(seance => seance?.film.id === film.id);
          this.listeSeanceFiltree.forEach(seance => {
            this.listeSeanceFiltreeFilm.push(seance);
          });
        }

      }, (error) => {
        // Error
        console.error('CallObservableComponent error', error);
      }, () => {
        // Complete
        console.log('CallObservableComponent Complete');
      }
    );

      // on ne renvoie pas de séance car pas de ciné selectionné
      return this.listeSeanceFiltreeFilm;
    
  }

}