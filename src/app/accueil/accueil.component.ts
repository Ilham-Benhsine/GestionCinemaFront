
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  tiles: Tile[] = [
    {text: '1', cols: 3, rows: 2, color: 'lightblue'},
    {text: '2', cols: 2, rows: 4, color: 'lightgreen'},
    {text: '3', cols: 2, rows: 2, color: 'lightpink'},
    {text: '4', cols: 3, rows: 2, color: '#DDBDF1'},
    {text: '5', cols: 2, rows: 2, color: 'lightblue'},
    {text: '6', cols: 2, rows: 2, color: 'lightgreen'},
    {text: '7', cols: 3, rows: 2, color: 'lightpink'},
    {text: '8', cols: 3, rows: 3, color: '#DDBDF1'},
    {text: '9', cols: 2, rows: 2, color: 'lightblue'},
    {text: '10', cols: 3, rows: 2, color: 'lightgreen'},
    {text: '11', cols: 2, rows: 2, color: 'lightpink'},

  ];
  ngOnInit(): void {
  }
}


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */



