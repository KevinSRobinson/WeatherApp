import { APP_INITIALIZER, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { WeatherStateComponent } from './components/weather-state/weather-state.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './token.interceptor';
import { ApiModule } from './api-module';
import { ApiConfiguration } from 'swagger-api/api-configuration';

export function tokenGetter() {
  return localStorage.getItem('token');
}
export function initApiConfiguration(config: ApiConfiguration, http: HttpClient): Function {
  return async () => {
    const AppSettings: any = await http.get('/app-settings.json').toPromise();
    console.log(AppSettings.api_url);
    config.rootUrl = AppSettings.api_url;
  };
}
export const INIT_API_CONFIGURATION: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initApiConfiguration,
  deps: [ApiConfiguration, HttpClient],
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailComponent,
    WeatherStateComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    ApiModule.forRoot({ rootUrl: 'http://localhost:999' }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    INIT_API_CONFIGURATION
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
