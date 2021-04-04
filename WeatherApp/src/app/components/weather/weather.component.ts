import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner-service.service';
import { Forecast } from 'swagger-api/models';
import { WeatherForecastService } from 'swagger-api/services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  fiveDayForcast: Forecast;
  constructor(
    private weatherForecastService: WeatherForecastService,
    private spinner: NgxSpinnerService,
    private loadingSpinnerService: LoadingSpinnerService
  ) {}
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    debugger;
    this.spinner.show();
    this.weatherForecastService
      .getApiWeatherForecastDaily()
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe(
        (response: Forecast) => {
          this.fiveDayForcast = response;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
