using System.Threading.Tasks;
using WeatherApi.Services.MetaWeather.Models;
using WeatherApi.Services.Models;

namespace WeatherApi.Services.MetaWeather
{
    public interface IWeatherService
    {
        Task<Forecast> GetWeatherAsync();
    }
}