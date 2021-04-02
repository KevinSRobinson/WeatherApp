import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-state',
  templateUrl: './weather-state.component.html',
  styleUrls: ['./weather-state.component.scss']
})
export class WeatherStateComponent implements OnInit {
  @Input() state  = '';
  constructor() { }

  ngOnInit() {
  }

  getImageUrl(){
    return `https://www.metaweather.com/static/img/weather/png/${this.state}.png`
  }
}
