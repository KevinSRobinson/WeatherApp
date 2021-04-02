using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherApi.Models
{
    public class LoginModelIn
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class RegisterModelIn
    {

        [Required] public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify a password between 4 and 8 Characters")]
        public string Password { get; set; }
}
}
