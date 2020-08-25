import { Utilisateur } from './shared/beans/Utilisateur';
import { UtilisateurObservableService } from './shared/observable/utilisateur-observable.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gestionCinema';

  utilisateur = new Utilisateur();
  subscription$: Subscription;

  constructor(private utilisateurObservableService: UtilisateurObservableService) { }

  ngOnInit(): void {
    if (localStorage.getItem('utilisateur')) {
      this.utilisateurObservableService.setUtilisateurSubject(JSON.parse(localStorage.getItem('utilisateur')));
    }
    this.subscription$ = this.utilisateurObservableService.getUtilisateurSubject().subscribe(
      (utilisateur: Utilisateur) => {
        this.utilisateur = utilisateur;
      }
    );
  }

}
