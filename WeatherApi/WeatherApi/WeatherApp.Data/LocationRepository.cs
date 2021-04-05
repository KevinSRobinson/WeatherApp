﻿using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WeatherApp.Data
{
    public interface ILocationRepository
    {
        Task<Location> GetLocationByUserId(string userId);
    }

    public class LocationRepository : ILocationRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public LocationRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Location> GetLocationByUserId(string userId)
        {
            var location = await _dbContext.Locations.FirstOrDefaultAsync(x => x.UserId == userId);

            return location;
        }
    }
}