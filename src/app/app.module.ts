import { UtilisateurObservableService } from './shared/observable/utilisateur-observable.service';
import { UtilisateurWebService } from './shared/webService/utilisateur.webservice';
import { SharedModule } from './shared/shared.module';
import { FilmWebService } from './shared/webService/film.webservice';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FilmComponent } from './film/film.component';
import { CinemaComponent } from './cinema/cinema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProflComponent } from './profl/profl.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FilmComponent,
    CinemaComponent,
    InscriptionComponent,
    ConnexionComponent,
    ProflComponent,
    DeconnexionComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    FilmWebService,
    UtilisateurWebService,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    UtilisateurObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
