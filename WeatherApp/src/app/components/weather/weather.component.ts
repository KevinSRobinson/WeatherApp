import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsolidatedWeather } from 'src/app/models/consolidate-weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  days: Array<ConsolidatedWeather>;
  constructor( private httpClient: HttpClient){
    
  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    const api = "https://localhost:44337/weatherforecast";

    this.httpClient.get(api).subscribe((response: any) => {
        this.days = response.consolidated_weather;
    });
  }

}
