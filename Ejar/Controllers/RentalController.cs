using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Ejar.Data;
using Ejar.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ejar.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RentalController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public RentalController(ApplicationDbContext context)
        {
            _db = context;
        }
        
        // GET: api/Rental
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok(await _db.Trip.ToListAsync());
        }

        // POST: api/Rental
        [HttpPost]
        public async  Task<ActionResult> Post([FromBody] TripModel trip)
        {
            var id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            Console.WriteLine("User id: " + id);
            var account = await _db.Account.FirstOrDefaultAsync(a => a.UserId == Convert.ToInt32(id));
            trip.AccountId = account.Id;
            //trip.Car = await _db.Car.FirstOrDefaultAsync(c => c.Id == trip.CarId);
            await _db.Trip.AddAsync(trip);
            await _db.SaveChangesAsync();
            return Ok(trip);
        }

        // PUT: api/Rental/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Rental/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
