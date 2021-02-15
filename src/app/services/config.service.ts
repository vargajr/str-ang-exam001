import { Injectable } from '@angular/core';

export interface ITableCols {
  key: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  tableCols: ITableCols[] = [
    {key: 'id', title: '#'},
    {key: 'name', title: 'Name'},
    {key: 'superPower', title: 'Super Power'},
    {key: 'address', title: 'Address'},
  ];

  constructor() { }
}
