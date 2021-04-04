using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using WeatherApi.Services;
using WeatherApi.Services.MetaWeather;
using WeatherApi.Services.MetaWeather.Models;
using WeatherApi.Services.Models;

namespace WeatherApi.Controllers
{
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

    [Route("api/WeatherForecast")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IWeatherService _weatherService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IWeatherService weatherService)
        {
            _logger = logger;
            _weatherService = weatherService;
        }
        
        [HttpGet("daily")]
        [HttpPost, ProducesResponseType(typeof(Forecast), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetWeather()
        {
            var weather = await _weatherService.GetWeatherAsync();

            return Ok(weather);
        }
    }
}
