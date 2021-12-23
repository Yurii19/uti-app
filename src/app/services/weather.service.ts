import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http : HttpClient) { }

  getWeather(url : string){
    const response = this.http.get(url);
    return response;
  }
}
