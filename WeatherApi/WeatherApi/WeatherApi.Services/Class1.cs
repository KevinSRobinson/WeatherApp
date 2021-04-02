using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace WeatherApi.Services
{
    public interface IWeatherService
    {
        Task<string> GetWeatherAsync();
    }

    public class WeatherService : IWeatherService
    {
        public async Task<string> GetWeatherAsync()
        {
            using (var httpClient = new HttpClient())
            {
                const string apiurl = "https://www.metaweather.com/api/location/44418/";

                var response = await httpClient.GetAsync(apiurl);

                return await response.Content.ReadAsStringAsync();
            }
        }
    }
}
