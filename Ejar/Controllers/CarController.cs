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
    public class CarController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public CarController(ApplicationDbContext context)
        {
            _db = context;
        }
        // POST: api/Rental
        [HttpPost]
        public async  Task<ActionResult> Post([FromBody] CarModel car)
        {
            
            var id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            Console.WriteLine("User id: " + id);
            var account = await _db.Account.FirstOrDefaultAsync(a => a.UserId == Convert.ToInt32(id));
            car.AccountId = account.Id;
            await _db.Car.AddAsync(car);
            await _db.SaveChangesAsync();
            return Ok(car);
        }
    }
}