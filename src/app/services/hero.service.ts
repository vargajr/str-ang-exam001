import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  apiUrl:string ='http://localhost:3000/heroes';

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  storedHeroList = [{
    id: 2,
    name: "Esmeralda Henricsson",
    superPower: "sapien dignissim",
    address: "France"
  }, {
    id: 4,
    name: "Sheilakathryn Bantham",
    superPower: "amet",
    address: "Tunisia"
  }, {
    id: 6,
    name: "Catharine Geddes",
    superPower: "aliquam sit amet",
    address: "Indonesia"
  }, {
    id: 8,
    name: "Roman Farries",
    superPower: "orci",
    address: "Macedonia"
  }, {
    id: 10,
    name: "Scottie Hansmann",
    superPower: "nulla",
    address: "Nigeria"
  }];

  constructor(private http: HttpClient) { };

  getAll(): void {
    this.http.get<Hero[]>(this.apiUrl).subscribe(
      onlineData => this.list$.next(onlineData),
      error => {
        this.list$.next(this.storedHeroList);
        alert('No server data available');
      }
    )
  };
}
