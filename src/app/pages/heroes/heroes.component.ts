import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { ConfigService, ITableCols } from 'src/app/services/config.service';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroList$: Observable<Hero[]> = this.heroService.list$;

  cols: ITableCols[] = this.config.tableCols;

  sortKey: string = '';
  searchPhrase: string = '';

  constructor(
    private heroService: HeroService,
    private config: ConfigService
    ) { }

  ngOnInit(): void {
    this.heroService.getAll()
  }

  sortListBy(key: string) {
    this.sortKey = key;
    // this.heroService.getAll();
  }

  onKeyUpSearch(ev: Event){
    this.searchPhrase = (ev.target as HTMLInputElement).value;
  }
}
