import { DialogDataExampleComponent } from './../shared/component/dialog-data-example/dialog-data-example.component';

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  test() {
    console.log('4');
  }
  openDialog() {
    this.dialog.open(DialogDataExampleComponent, {
      data: {

      }
    });
  }

}











