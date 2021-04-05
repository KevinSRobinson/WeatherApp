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
}