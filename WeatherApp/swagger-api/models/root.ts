/* tslint:disable */
import { ConsolidatedWeather } from './consolidated-weather';
import { Parent } from './parent';
import { Source } from './source';
export interface Root {
  consolidated_weather?: Array<ConsolidatedWeather>;
  latt_long?: string;
  location_type?: string;
  parent?: Parent;
  sources?: Array<Source>;
  sun_rise?: string;
  sun_set?: string;
  time?: string;
  timezone?: string;
  timezone_name?: string;
  title?: string;
  woeid?: number;
}
