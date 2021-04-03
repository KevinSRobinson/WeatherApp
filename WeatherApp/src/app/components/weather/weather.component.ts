import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsolidatedWeather, Root } from 'swagger-api/models';
import { WeatherForecastService } from 'swagger-api/services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  days?: Array<ConsolidatedWeather>;
  constructor(private weatherForecastService: WeatherForecastService){
    
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.weatherForecastService.getApiWeatherForecastDaily().subscribe((response: Root) => {
      debugger;
      console.log(response);
      this.days = response.consolidated_weather;
    })
  }
  // loadData(){
  //   const api = "https://localhost:44337/api/WeatherForecast/daily";



  //   this.httpClient.get(api).subscribe((response: any) => {
  //       this.days = response.consolidated_weather;
  //   }, error => {

  //    console.log(error);
  //   });
  // }

}
