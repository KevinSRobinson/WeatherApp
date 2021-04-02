import { Component, Input, OnInit } from '@angular/core';
import { ConsolidatedWeather } from 'src/app/models/consolidate-weather';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
  @Input() detail: ConsolidatedWeather;
  constructor() { }

  ngOnInit() {
  }

}
