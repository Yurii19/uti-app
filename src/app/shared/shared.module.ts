import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CurrencyPageComponent } from '../features/currency-page/currency-page.component';
import { WeatherPageComponent } from '../features/weather-page/weather-page.component';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [CurrencyPageComponent, WeatherPageComponent],
  imports: [
    CommonModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatListModule,
    MatChipsModule,
    MatGridListModule,
  ],
  exports: [CurrencyPageComponent, WeatherPageComponent],
})
export class SharedModule {}
