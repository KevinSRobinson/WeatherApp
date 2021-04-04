/* tslint:disable */
import { DailyForecast } from './daily-forecast';
export interface Forecast {
  dailyForecasts?: Array<DailyForecast>;
  lattLong?: string;
  sunRise?: string;
  sunSet?: string;
  time?: string;
  timezone?: string;
  title?: string;
}
