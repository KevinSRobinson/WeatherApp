import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DailyForecast } from 'swagger-api/models';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherApp';
  days: Array<DailyForecast>;
  constructor(
    private router: Router,
    private authService: AuthService

    ){
  }
  get isLoggedIn(){
    return this.authService.loggedIn();
  }
  logout(){
    this.authService.logOut();

    this.login();
  }
  login() {
    this.router.navigateByUrl('login')
  }
}
