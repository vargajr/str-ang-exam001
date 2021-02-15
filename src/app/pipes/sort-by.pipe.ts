import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../model/hero';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Hero[] | null, key: string): Hero[] | null {
    if(!Array.isArray(value) || !key) { return value}

    return value.sort( (a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return a[key] - b[key]
      } else {
        const aValueString: string = ('' + a[key]).toLocaleLowerCase();
        const bValueString: string = ('' + b[key]).toLocaleLowerCase();
        return aValueString.localeCompare(bValueString);
      }
    })
  }

}
