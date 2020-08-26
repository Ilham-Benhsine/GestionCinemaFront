import { GenreWebService } from './shared/webService/genre.webservice';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatExpansionModule } from '@angular/material/expansion';
import { CinemaWebService } from './shared/webService/cinema.webservice';
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
import { NgModule, Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FilmComponent } from './film/film.component';
import { CinemaComponent } from './cinema/cinema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProflComponent } from './profl/profl.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { DialogDataExampleComponent } from './shared/component/dialog-data-example/dialog-data-example.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FilmComponent,
    CinemaComponent,
    InscriptionComponent,
    ConnexionComponent,
    ProflComponent,
    DeconnexionComponent,
    DialogDataExampleComponent
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
    MatAutocompleteModule,
    MatExpansionModule,
    IvyCarouselModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  providers: [
    FilmWebService,
    CinemaWebService,
    GenreWebService,
    UtilisateurWebService,
    UtilisateurObservableService,
    MatSnackBar,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
