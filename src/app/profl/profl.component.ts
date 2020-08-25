import { Router } from '@angular/router';
import { UtilisateurWebService } from './../shared/webService/utilisateur.webservice';
import { UtilisateurObservableService } from './../shared/observable/utilisateur-observable.service';
import { Utilisateur } from './../shared/beans/Utilisateur';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profl',
  templateUrl: './profl.component.html',
  styleUrls: ['./profl.component.scss']
})
export class ProflComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  utilisateur = new Utilisateur();
  subscription$: Subscription;

  constructor(
    private utilisateurObservableService: UtilisateurObservableService,
    private utilisateurWebService: UtilisateurWebService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subscription$ = this.utilisateurObservableService.getUtilisateurSubject().subscribe(
      (utilisateur: Utilisateur) => {
        this.utilisateur = utilisateur;
      }
    );
  }

  modifierUtilisateur(utilisateur: Utilisateur): void {
    this.utilisateurWebService.updateUtilisateur(utilisateur).subscribe(
      (utilisateurReturn) => {
        console.log('TestWebServiceUtilisateur', utilisateurReturn);
        if (utilisateurReturn.id === 0) {
          this.openSnackBar('Pseudo non disponible');
        } else {
          this.addUtilisateurInLocalStorage(utilisateurReturn);
          this.addUtilisateurInObservable(utilisateurReturn);
          this.openSnackBar('Profil mis à jour');
          this.router.navigate(['/accueil']);
        }
      }, (error) => {
        console.error(error);
      }
    );
  }

  addUtilisateurInLocalStorage(util: Utilisateur): void {
    localStorage.setItem('utilisateur', JSON.stringify(util));
  }

  addUtilisateurInObservable(util: Utilisateur): void {
    this.utilisateurObservableService.setUtilisateurSubject(util);
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
