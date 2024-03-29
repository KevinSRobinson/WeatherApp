﻿using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace WeatherApi.Services.MetaWeather.Models
{
    public class FiveDayForecast
    {
        [JsonProperty("consolidated_weather")]
        public List<ConsolidatedWeather> ConsolidatedWeather { get; set; }

        [JsonProperty("time")]
        public DateTime Time { get; set; }

        [JsonProperty("sun_rise")]
        public DateTime SunRise { get; set; }

        [JsonProperty("sun_set")]
        public DateTime SunSet { get; set; }

        [JsonProperty("timezone_name")]
        public string TimezoneName { get; set; }

        [JsonProperty("parent")]
        public Parent Parent { get; set; }

        [JsonProperty("sources")]
        public List<Source> Sources { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("location_type")]
        public string LocationType { get; set; }

        [JsonProperty("woeid")]
        public int Woeid { get; set; }

        [JsonProperty("latt_long")]
        public string LattLong { get; set; }

        [JsonProperty("timezone")]
        public string Timezone { get; set; }
    }
}