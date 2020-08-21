import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cinema-card',
  templateUrl: './cinema-card.component.html',
  styleUrls: ['./cinema-card.component.scss']
})
export class CinemaCardComponent implements OnInit {

  @Input() cinema: string;

  constructor() { }

  ngOnInit(): void {
  }

}
