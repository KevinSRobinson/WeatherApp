import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { LoadingSpinnerService } from 'src/app/services/loading-spinner-service.service';
import { DailyForecast, Forecast } from 'swagger-api/models';
import { WeatherForecastService } from 'swagger-api/services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  fiveDayForcast: Forecast;
  today: DailyForecast;
  constructor(
    private weatherForecastService: WeatherForecastService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.spinner.show();
    this.weatherForecastService
      .getApiWeatherForecastDaily()
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe(
        (response: Forecast) => {
         
          this.fiveDayForcast = response;

          this.today = this.fiveDayForcast.dailyForecasts[0];

          this.fiveDayForcast.dailyForecasts.shift();
        },
        (error: any) => {
          console.log(error);
          this.toastr.error("Failed to Connect to Weather Service");
        }
      );
  }
}
