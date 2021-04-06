using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace WeatherApp.Data.Models
{
    public class ApplicationUser: IdentityUser
    {
        public Location Location { get; set; }
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