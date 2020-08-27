import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UtilisateurObservableService } from './../shared/observable/utilisateur-observable.service';
import { UtilisateurWebService } from './../shared/webService/utilisateur.webservice';
import { Utilisateur } from './../shared/beans/Utilisateur';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  nouvelUtilisateur = new Utilisateur();
  passwordVerif: string;

  constructor(
    private utilisateurObservableService: UtilisateurObservableService,
    private utilisateurWebService: UtilisateurWebService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  ajouterNouvelUtilisateur(util: Utilisateur): void {
    this.utilisateurWebService.addUtilisateur(util).subscribe(
      (utilisateurReturn) => {
        console.log('TestWebServiceUtilisateur', utilisateurReturn);
        if (utilisateurReturn.id === 0) {
          this.openSnackBar('Pseudo non disponible');
        } else {
          this.addUtilisateurInLocalStorage(utilisateurReturn);
          this.addUtilisateurInObservable(utilisateurReturn);
          this.openSnackBar('Inscription validée');
          this.router.navigate(['/accueil']);
        }
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
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
