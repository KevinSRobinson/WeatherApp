using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherApi.Models
{
    public class WeatherModelOut
    {
        public DateTime Date { get; set; }

        public string WeatherState  { get; set; }

        public string WeatherStateAbbr { get; set; }
    }
}