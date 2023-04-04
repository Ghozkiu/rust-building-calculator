import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Building } from 'src/app/building/interfaces/building.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  @Input() twigBuildings: Building[] = [];
  @Input() woodBuildings: Building[] = [];
  @Input() stonesBuildings: Building[] = [];
  @Input() metalFragmentsBuildings: Building[] = [];
  @Input() armoredBuildings: Building[] = [];

  @Output() onClickMenuItem: EventEmitter<Building> = new EventEmitter();
  @Output() onClickClear: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  menuItemClick(building: Building) {
    console.log(building);
    this.onClickMenuItem.emit(building);
  }

  menuItemClear() {
    this.onClickClear.emit();
  }
}
