import { Film } from './../../beans/Film';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  @Input() film: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
