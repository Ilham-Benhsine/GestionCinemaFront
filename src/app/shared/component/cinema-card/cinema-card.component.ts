import { Component, OnInit, Input } from '@angular/core';
import { Cinema } from '../../beans/Cinema';

@Component({
  selector: 'app-cinema-card',
  templateUrl: './cinema-card.component.html',
  styleUrls: ['./cinema-card.component.scss']
})
export class CinemaCardComponent implements OnInit {

  @Input() cinema: Cinema;

  constructor() { }

  ngOnInit(): void {
  }

}
