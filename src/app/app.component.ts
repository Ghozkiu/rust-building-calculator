import { Component } from '@angular/core';
import {
  armoredData,
  metalFragmentsData,
  stonesData,
  twigData,
  woodData,
} from './building/data/buildings.data';
import { Building } from './building/interfaces/building.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rust-building-calculator';

  cards: Building[] = [];

  twigBuildings: Building[] = twigData;
  woodBuildings: Building[] = woodData;
  stonesBuildings: Building[] = stonesData;
  metalFragmentsBuildings: Building[] = metalFragmentsData;
  armoredBuildings: Building[] = armoredData;

  addNewCard(building: Building) {
    if (!this.cards.includes(building)) {
      this.cards.push(building);
    }
  }

  deleteCard(building: Building) {
    this.cards = this.cards.filter((item) => item !== building);
  }

  clearCards() {
    this.cards = [];
  }

  // updateCardsData(updatedCards: Building[]) {
  //   updatedCards.forEach((element) => {
  //     console.log('appComponent', element);
  //   });
  //   this.cards = updatedCards;
  // }
}
