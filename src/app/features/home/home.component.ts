import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface currency {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // value = 'Clear me';
  // username = 'Unknown';
 

  ngOnInit(): void {}

  // setUserName() {
  //   this.username = this.value === '' ? 'Unknown' : this.value;
  // }
}
