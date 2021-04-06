using System.ComponentModel.DataAnnotations.Schema;

namespace WeatherApp.Data.Models
{
    public class Location
    {
        public int Id { get; set; }
        public int LocationCode { get; set; }
        
        public string LocationName { get; set; }

        public string UserId { get; set; }

        [ForeignKey("UserId")]

        public ApplicationUser ApplicationUser { get; set; }
    }
}