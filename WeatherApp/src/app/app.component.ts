import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsolidatedWeather } from './models/consolidate-weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherApp';
  days: Array<ConsolidatedWeather>;
  constructor( private httpClient: HttpClient, private router: Router){
    this.loadData();
  }

  loadData(){
    const api = "https://localhost:44337/weatherforecast";

    this.httpClient.get(api).subscribe((response: any) => {
        this.days = response.consolidated_weather;
    });
  }
  login() {
    this.router.navigateByUrl('login')
  }
}
