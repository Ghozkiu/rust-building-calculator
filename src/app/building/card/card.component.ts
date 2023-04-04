import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Building } from '../interfaces/building.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [],
})
export class CardComponent implements OnInit {
  // counter: number = 0;
  @Output() onClickDelete: EventEmitter<Building> = new EventEmitter();
  @Input() building: Building = {
    material: '',
    cost: 0,
    name: '',
    quantity: 0,
  };
  // @Output() onIncrementCounter: EventEmitter<Building> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  counterOperation(value: number): void {
    if (this.building.quantity + value >= 0) {
      this.building.quantity += value;
      // this.onIncrementCounter.emit(this.building);
    }
  }

  applyCounter(newValue: number) {
    this.building.quantity = newValue;
    // this.onIncrementCounter.emit(this.building);
  }

  delete() {
    this.onClickDelete.emit(this.building);
  }
}
