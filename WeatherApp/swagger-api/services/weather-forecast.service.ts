/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Forecast } from '../models/forecast';
@Injectable({
  providedIn: 'root',
})
class WeatherForecastService extends __BaseService {
  static readonly getApiWeatherForecastDailyPath = '/api/WeatherForecast/daily';
  static readonly postApiWeatherForecastPath = '/api/WeatherForecast';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiWeatherForecastDailyResponse(): __Observable<__StrictHttpResponse<Forecast>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/WeatherForecast/daily`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Forecast>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiWeatherForecastDaily(): __Observable<Forecast> {
    return this.getApiWeatherForecastDailyResponse().pipe(
      __map(_r => _r.body as Forecast)
    );
  }

  /**
   * @return Success
   */
  postApiWeatherForecastResponse(): __Observable<__StrictHttpResponse<Forecast>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/WeatherForecast`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Forecast>;
      })
    );
  }
  /**
   * @return Success
   */
  postApiWeatherForecast(): __Observable<Forecast> {
    return this.postApiWeatherForecastResponse().pipe(
      __map(_r => _r.body as Forecast)
    );
  }
}

module WeatherForecastService {
}

export { WeatherForecastService }
