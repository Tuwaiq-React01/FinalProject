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
    public class ProfileController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
            public ProfileController(ApplicationDbContext context)
            {
                _db = context;
            }
        
            // GET: api/Profile
            [HttpGet]
            public async Task<ActionResult> Get()
            {
                var id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
                var account = await _db.Account.Include(u => u.Cars).Include(u => u.Trips).FirstOrDefaultAsync(a => a.UserId == id);
                account.License = await _db.License.FirstOrDefaultAsync(a => a.AccountId == account.Id);
                account.Cars = await _db.Car.Include(i => i.Images).Where(c => c.AccountId == account.Id).ToListAsync<CarModel>();
                   ;
                return Ok(account);
            }
            
            // PUT: api/Profile/id
            [HttpPut("Edit")]
            public async Task<ActionResult> Edit(AccountModel account)
            {
                var Uid = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
                //var Uaccount = await _db.Account.FirstOrDefaultAsync(a => a.UserId == Uid);
                
                //account.License = await _db.License.FirstOrDefaultAsync(a => a.AccountId == account.Id);
                //account.Cars = await _db.Car.Include(i => i.Images).Where(c => c.AccountId == account.Id).ToListAsync<CarModel>();
                account.UserId = Uid;
                return Ok( _db.Account.Update(account));
            }
    }
}