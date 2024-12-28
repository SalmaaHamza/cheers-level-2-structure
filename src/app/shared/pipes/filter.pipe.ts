import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: Cocktail[], searchText: string): Cocktail[]  {
    if (!items) return [];
    if (!searchText) return items;
    if (searchText == "") return items;

    return items.filter((item) => item.name.toLowerCase() == searchText.toLowerCase());
  }

}
