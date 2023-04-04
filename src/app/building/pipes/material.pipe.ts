import { Pipe, PipeTransform } from '@angular/core';
import { Building } from '../interfaces/building.interface';
import { Material } from '../interfaces/material.interface';

@Pipe({
  name: 'material',
  pure: false,
})
export class MaterialPipe implements PipeTransform {
  transform(buildings: Building[]): Material[] {
    const materials: Material[] = [
      {
        material: 'wood',
        quantity: 0,
      },
      {
        material: 'stones',
        quantity: 0,
      },
      {
        material: 'metal fragments',
        quantity: 0,
      },
      {
        material: 'high quality metal',
        quantity: 0,
      },
    ];
    console.log('Materials Pipe', materials);
    buildings.forEach((building) => {
      materials.forEach((material) => {
        if (material.material === building.material) {
          material.quantity += building.quantity * building.cost;
        }
      });
    });
    return materials;
  }
}
