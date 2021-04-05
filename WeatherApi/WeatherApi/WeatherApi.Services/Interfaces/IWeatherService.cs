using System.Threading.Tasks;
using WeatherApi.Services.Models;

namespace WeatherApi.Services.Interfaces
{
    public interface IWeatherService
    {
        Task<Forecast> GetWeatherAsync();
    }
}