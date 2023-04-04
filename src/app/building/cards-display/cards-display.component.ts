import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Building } from '../interfaces/building.interface';

@Component({
  selector: 'app-cards-display',
  templateUrl: './cards-display.component.html',
  styles: [],
})
export class CardsDisplayComponent implements OnInit {
  @Input() cards: Building[] = [];
  @Output() onClickDeleteCard: EventEmitter<Building> = new EventEmitter();
  // @Output() onUpdateCardsData: EventEmitter<Building[]> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  emitDeleteItem(building: Building) {
    this.onClickDeleteCard.emit(building);
  }

  // updateCardsData(building: Building) {
  //   this.cards.forEach((cardBuilding) => {
  //     if (cardBuilding.name === building.name) {
  //       console.log('entro cards display');
  //       cardBuilding.quantity = building.quantity;
  //     }
  //   });
  //   this.onUpdateCardsData.emit(this.cards);
  // }
}
