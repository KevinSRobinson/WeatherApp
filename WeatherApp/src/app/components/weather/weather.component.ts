import { Component, OnInit } from '@angular/core';
import { Forecast } from 'swagger-api/models';
import { WeatherForecastService } from 'swagger-api/services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  fiveDayForcast: Forecast;
  constructor(private weatherForecastService: WeatherForecastService){
    
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.weatherForecastService.getApiWeatherForecastDaily().subscribe((response: Forecast) => {
      this.fiveDayForcast = response;
    });
  }
}
