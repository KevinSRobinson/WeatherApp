using System.Net;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using WeatherApi.Services.Interfaces;
using WeatherApi.Services.Models;
using WeatherApp.Data;

namespace WeatherApi.Controllers
{
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

    [Route("api/WeatherForecast")]
    public class WeatherForecastController : ControllerBase
    { 

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly ILocationRepository _locationRepository;
        private readonly IWeatherService _weatherService;
        private readonly UserManager<ApplicationUser> _userManager;
        public WeatherForecastController(ILogger<WeatherForecastController> logger, 
            ILocationRepository locationRepository,
            IWeatherService weatherService, UserManager<ApplicationUser> userManager)
        {
            _logger = logger;
            _locationRepository = locationRepository;
            _weatherService = weatherService;
            _userManager = userManager;
        }
        
        [HttpGet("daily")]
        [HttpPost, ProducesResponseType(typeof(Forecast), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetWeather()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier); 
            
            var location = await _locationRepository.GetLocationByUserId(userId);

            var weather = await _weatherService.GetWeatherAsync(location.LocationCode);

            return Ok(weather);
        }
    }
}
