import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HistoryComponent } from './history/history.component';
import { CardsDisplayComponent } from './cards-display/cards-display.component';
import { MaterialPipe } from './pipes/material.pipe';

@NgModule({
  declarations: [
    CardComponent,
    HistoryComponent,
    CardsDisplayComponent,
    MaterialPipe,
  ],
  imports: [CommonModule],
  exports: [HistoryComponent, CardComponent, CardsDisplayComponent],
})
export class BuildingModule {}
