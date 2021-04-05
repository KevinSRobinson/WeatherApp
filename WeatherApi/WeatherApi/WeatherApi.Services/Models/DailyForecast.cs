namespace WeatherApi.Services.Models
{
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