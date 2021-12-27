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
  temperatureAtPoint = null;
  city = '';
  markers: null | any = null;

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
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=18141911a2204318380aeeac3872a83f&units=metric`;

      this.weather.getWeather(url).subscribe((resp: any) => {
        this.temperatureAtPoint = resp.main.temp;
        this.city = resp.name;
        console.log(resp);
        if (this.markers !== null) {
          this.map.removeLayer(this.markers);
        }
        this.markers = L.marker(e.latlng).addTo(this.map);
      });
    });
  }
}
