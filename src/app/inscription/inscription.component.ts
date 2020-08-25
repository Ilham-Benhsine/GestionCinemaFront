import { UtilisateurWebService } from './../shared/webService/utilisateur.webservice';
import { Utilisateur } from './../shared/beans/Utilisateur';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  nouvelUtilisateur = new Utilisateur();
  passwordVerif: string;

  constructor(private utilisateurWebService: UtilisateurWebService) { }

  ngOnInit(): void {
  }

  ajouterNouvelUtilisateur(util: Utilisateur): void {
    this.utilisateurWebService.addUtilisateur(util).subscribe(
      (data) => {
        console.log('TestWebServiceUtilisateur', data);
      }
    );
  }

}
