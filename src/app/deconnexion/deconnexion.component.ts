import { UtilisateurObservableService } from './../shared/observable/utilisateur-observable.service';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../shared/beans/Utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.scss']
})
export class DeconnexionComponent implements OnInit {

  constructor(
    private utilisateurObservableService: UtilisateurObservableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.deleteUtilisateurInLocalStorage();
    this.deletetilisateurInObservable();
    this.router.navigate(['/accueil']);
  }

  deleteUtilisateurInLocalStorage(): void {
    localStorage.removeItem('utilisateur');
  }

  deletetilisateurInObservable(): void {
    this.utilisateurObservableService.setUtilisateurSubject(new Utilisateur());
  }

}
