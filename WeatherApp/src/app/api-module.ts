/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { AppModule } from './app.module';
import { WeatherForecastService } from 'swagger-api/services';
import { ApiConfiguration, ApiConfigurationInterface } from 'swagger-api/api-configuration';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AuthService,
    WeatherForecastService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<AppModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: "dfdsfsd"}
        }
      ]
    }
  }
}
