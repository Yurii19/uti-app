import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyPageComponent } from './features/currency-page/currency-page.component';
import { HomeComponent } from './features/home/home.component';
import { WeatherPageComponent } from './features/weather-page/weather-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'currency', component: CurrencyPageComponent },
  { path: 'weather', component: WeatherPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
