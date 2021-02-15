import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../model/hero';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Hero[] | null, searchPhrase: string): Hero[] | null {
    if(Array.isArray(value) && searchPhrase) { 
      searchPhrase = searchPhrase.toLocaleLowerCase();
      return value.filter( hero => hero.name.toLocaleLowerCase().includes(searchPhrase) );
    } else {
      return value;
    }
  }

}
