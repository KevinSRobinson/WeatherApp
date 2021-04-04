import { Component, Input, OnInit } from '@angular/core';
import { DailyForecast } from 'swagger-api/models';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  @Input() detail: DailyForecast;
  constructor() { }

  ngOnInit() {
  }

}
