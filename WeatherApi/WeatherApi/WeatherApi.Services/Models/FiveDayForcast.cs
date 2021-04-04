using System;
using System.Collections.Generic;

namespace WeatherApi.Services.Models
{
    public class Forecast
    {
        public List<DailyForecast> DailyForecasts { get; set; }

        public DateTime Time { get; set; }

        public DateTime SunRise { get; set; }

        public DateTime SunSet { get; set; }
        
        public string Title { get; set; }

        public string LattLong { get; set; }

        public string Timezone { get; set; }
    }

    public class DailyForecast
    {
        public string WeatherStateName { get; set; }

        public string WeatherStateAbbr { get; set; }

        public string WindDirectionCompass { get; set; }

        public string ApplicableDate { get; set; }

        public double MinTemp { get; set; }

        public double MaxTemp { get; set; }

        public double TheTemp { get; set; }

        public double WindSpeed { get; set; }

        public double WindDirection { get; set; }

        public double AirPressure { get; set; }

        public int Humidity { get; set; }

        public double Visibility { get; set; }

        public int Predictability { get; set; }
    }
}