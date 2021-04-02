import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { WeatherStateComponent } from './components/weather-state/weather-state.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { LoginComponent } from './components/login/login.component';

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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
