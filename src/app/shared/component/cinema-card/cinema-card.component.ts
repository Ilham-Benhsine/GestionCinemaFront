import { Router } from '@angular/router';
import { Cinema } from './../../beans/Cinema';
import { CinemaObservableService } from './../../observable/cinema-observable.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cinema-card',
  templateUrl: './cinema-card.component.html',
  styleUrls: ['./cinema-card.component.scss']
})
export class CinemaCardComponent implements OnInit {

  @Input() cinema: Cinema;

  constructor(private cinemaObservableService: CinemaObservableService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  clickSeances(cinema: Cinema) {
    this.cinemaObservableService.setCinemaSubject(cinema);
    this.router.navigate(['/film']);
  }

}
