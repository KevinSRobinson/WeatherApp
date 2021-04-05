using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace WeatherApp.Data
{
    public class ApplicationUser: IdentityUser
    {
        public Location Location { get; set; }
    }

    public class Location
    {
        public int Id { get; set; }
        public int LocationCode { get; set; }
        
        public string LocationName { get; set; }


        public string UserId { get; set; }

        [ForeignKey("UserId")]

        public ApplicationUser ApplicationUser { get; set; }
    }

    public class Role : IdentityRole<int>
    {
        public ICollection<UserRole> UserRoles { get; set; }
    }

    public class UserRole : IdentityUserRole<int>
    {
        public ApplicationUser User { get; set; }
        public Role Role { get; set; }
    }
}