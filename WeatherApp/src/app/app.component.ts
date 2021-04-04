import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DailyForecast } from 'swagger-api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherApp';
  days: Array<DailyForecast>;
  constructor(private router: Router){
  }
  login() {
    this.router.navigateByUrl('login')
  }
}
