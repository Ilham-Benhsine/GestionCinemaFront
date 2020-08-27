import { Router } from '@angular/router';
import { UtilisateurObservableService } from './../shared/observable/utilisateur-observable.service';
import { UtilisateurWebService } from './../shared/webService/utilisateur.webservice';
import { Utilisateur } from './../shared/beans/Utilisateur';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  utilisateur = new Utilisateur();

  constructor(
    private utilisateurWebService: UtilisateurWebService,
    private utilisateurObservableService: UtilisateurObservableService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  connecterUtilisateur(util: Utilisateur): void {
    this.utilisateurWebService.getUtilisateur(util).subscribe(
      (utilisateurReturn) => {
        console.log('TestUtilisateurWebService ', utilisateurReturn);
        if (utilisateurReturn.id !== 0) {
          this.addUtilisateurInLocalStorage(utilisateurReturn);
          this.addUtilisateurInObservable(utilisateurReturn);
          this.openSnackBar();
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

  openSnackBar(): void {
    this.snackBar.open(this.utilisateur.pseudo + ' est connecté', 'Fermer', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
