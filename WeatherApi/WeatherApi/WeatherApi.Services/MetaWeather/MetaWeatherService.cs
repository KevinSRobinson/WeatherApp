using System.Collections.Generic;
using System.Net.Http;
using System.Runtime.ExceptionServices;
using System.Threading.Tasks;
using Newtonsoft.Json;
using WeatherApi.Services.MetaWeather.Models;
using WeatherApi.Services.Models;

namespace WeatherApi.Services.MetaWeather
{
    public class MetaWeatherService : IWeatherService
    {
        private readonly string _apiUrl;

        public MetaWeatherService(string apiUrl)
        {
            _apiUrl = apiUrl;
        }

        public async Task<Forecast> GetWeatherAsync()
        {
            using var httpClient = new HttpClient();
            
            var response = await httpClient.GetAsync(_apiUrl);

            var content =  await response.Content.ReadAsStringAsync();

            var weather = JsonConvert.DeserializeObject<FiveDayForecast>(content);

            return Map(weather);
        }

        #region Mappers
        private Forecast Map(FiveDayForecast fiveDayForecast)
        {
            return new Forecast()
            {
                DailyForecasts = MapDailyForecasts(fiveDayForecast.ConsolidatedWeather),
                Time = fiveDayForecast.Time,
                SunRise = fiveDayForecast.SunRise,
                SunSet = fiveDayForecast.SunSet,
                Title = fiveDayForecast.Title,
                LattLong = fiveDayForecast.LattLong,
                Timezone = fiveDayForecast.Timezone
            };
        }
        
        private List<DailyForecast> MapDailyForecasts(List<ConsolidatedWeather> forecasts)
        {
            var dailyForecasts = new List<DailyForecast>();

            foreach (var forecast in forecasts)
            {
                dailyForecasts.Add(MapDailyForecast(forecast));
            }

            return dailyForecasts;
        }

        private DailyForecast MapDailyForecast(ConsolidatedWeather dailyForecast)
        {
            return new DailyForecast()
            {
                WeatherStateName = dailyForecast.WeatherStateName,
                WeatherStateAbbr = dailyForecast.WeatherStateAbbr,
                WindDirectionCompass = dailyForecast.WindDirectionCompass,
                ApplicableDate = dailyForecast.ApplicableDate,
                MinTemp = dailyForecast.MinTemp,
                MaxTemp = dailyForecast.MaxTemp,
                TheTemp = dailyForecast.TheTemp,
                WindSpeed = dailyForecast.WindSpeed,
                WindDirection = dailyForecast.WindDirection,
                AirPressure = dailyForecast.AirPressure,
                Humidity = dailyForecast.Humidity,
                Visibility = dailyForecast.Visibility,
                Predictability = dailyForecast.Predictability
            };
        } 
        #endregion
    }
}
