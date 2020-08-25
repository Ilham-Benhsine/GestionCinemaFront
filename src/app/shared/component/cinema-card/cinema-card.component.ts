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

  clickSeances() {
    console.log("test");
    console.log(this.cinema);
    console.log("test");
    window.location.href = "http://localhost:4200/film";
  }

}
