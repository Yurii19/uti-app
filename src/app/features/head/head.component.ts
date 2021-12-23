import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'head-component',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  
  date: any;
  constructor() {
    this.date = new Date().toDateString();
  }

  ngOnInit(): void {}
}
