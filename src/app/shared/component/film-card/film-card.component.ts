import { Film } from './../../beans/Film';
import { Component, OnInit, Input } from '@angular/core';
import { Seance } from '../../beans/Seance';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input() film: Film;
  @Input() seances: Array<Seance>;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }
}
