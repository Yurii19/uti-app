import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit, AfterViewInit {
  lat = 0;
  long = 0;

  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, 98.5795],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();

    this.map.on('click', (e: any) => {
      this.lat = e.latlng.lat;
      this.long = e.latlng.lng;
      console.log(e.latlng);
      this.weather
        .getWeather('https://api.coindesk.com/v1/bpi/currentprice.json')
        .subscribe((resp) => console.log(resp));
    });
  }
}
