import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { currency } from '../home/home.component';

@Component({
  selector: 'currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.scss']
})
export class CurrencyPageComponent implements OnInit {


  currencyData: Observable<any>;
  
  displayedColumns: string[] = ['ccy', 'base_ccy', 'buy', 'sale'];
  dataSource: currency[] = [ ];

  columns = [
    { columnsDef: 'ccy', header: 'Name', cell: 'CELL' },
    { columnsDef: 'base_ccy', header: 'Base', cell: 'CELL' },
    { columnsDef: 'buy', header: 'Buy', cell: 'CELL' },
    { columnsDef: 'sale', header: 'Sale', cell: 'CELL' },
  ];

  constructor(private http: HttpClient) {
    this.currencyData = this.http.get(
      'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    );

    this.currencyData.subscribe((data: currency[]) => {
      this.dataSource = data;
    });
  }

  ngOnInit(): void {
  }

}
