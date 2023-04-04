import { Component, Input, OnInit } from '@angular/core';
import { Building } from '../interfaces/building.interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: [],
})
export class HistoryComponent implements OnInit {
  @Input() buildings: Building[] = [];

  constructor() {}

  ngOnInit(): void {}

  isBuildingsEmpty(): boolean {
    let isEmpty = true;
    this.buildings.forEach((building) => {
      if (building.quantity > 0) {
        isEmpty = false;
      }
    });
    return isEmpty;
  }
}
