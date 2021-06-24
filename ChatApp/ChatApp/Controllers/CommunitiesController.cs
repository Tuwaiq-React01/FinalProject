using ChatApp.Data;
using ChatApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ChatApp.Controllers
{
    [Authorize]
    [ApiController]
    [Route("/api/[controller]")]
    public class CommunitiesController : Controller
    {
        private readonly ApplicationDbContext _db;

        public CommunitiesController(ApplicationDbContext context)
        {
            _db = context;
        }
        [HttpGet]
        public IActionResult Index()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
            {
                return BadRequest(new { Message = "Invalid access" });
            }
            var userProfile = _db.UserProfiles.FirstOrDefault(u =>u.Id==userId);
            if (userProfile==null)
            {
                RedirectToAction("Index", "UserProfiles");
            }
            var Usercommunities = _db.Communities.ToList();
            // list all
            return Ok(Usercommunities);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> Create([FromQuery]string Name,[FromQuery]string Descreption)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
            {
                return BadRequest(new{Message="Invalid access to create a community"});
            }
            string commun_id = Guid.NewGuid().ToString("N"); // Represents: a globally unique identifier (GUID).
            _db.Communities.Add(new Community() { Id = commun_id, Name = Name, Descreption=Descreption, CreatedAt = DateTime.Now });
            _db.CommunityUser.Add(new CommunityUser() { CommunityId= commun_id, UserId = userId, IsOwner= true});
            string channel_id = Guid.NewGuid().ToString("N"); // Represents: a globally unique identifier (GUID).
            _db.Channels.Add(new Channel() { Id = channel_id, CommunityId= commun_id, Name="General", CreatedAt = DateTime.Now });
            _db.SaveChanges();
            return Ok(new {Message= "Success request for " + channel_id});
        }

        [HttpPut("Edit")]
        public async Task<IActionResult> Edit([FromQuery]string cummon_id, [FromQuery]string Name,[FromQuery] string Descreption)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var CommunityToUpdate = await _db.Communities.Include(c => c.CommunityUsers.Where(u=>u.UserId == userId && u.IsOwner==true)).FirstOrDefaultAsync(s => s.Id == cummon_id);
            if (CommunityToUpdate==null) { return BadRequest(); }
            if (await TryUpdateModelAsync<Community>(
                CommunityToUpdate,
                "",
                s => s.Name, s => s.Descreption))
            {
                try
                {
                    await _db.SaveChangesAsync();
                }
                catch (DbUpdateException /* ex */)
                {
                    return BadRequest("Unable to save changes. " +
                        "Try again, and if the problem persists, " +
                        "see your system administrator. You can Find me at GitHub: @1Riyad");
                }
            }
            return Ok(new  {Message= "the Community has been updated successfully" });
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete([FromQuery]string cummon_id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var CommunityToDelete = await _db.Communities.Include(c=> c.Channels).Include(c => c.CommunityUsers.Where(u=>u.UserId == userId && u.IsOwner==true)).FirstOrDefaultAsync( Community =>  Community.Id == cummon_id);
            if (CommunityToDelete==null) { return BadRequest(new {Error="Unable to deleted the community at this moment"}); }            
     
            _db.Communities.Remove(CommunityToDelete);
            _db.SaveChanges();
            return Ok(new {Message= "the Community has been deleted successfully" });
        }
    }
}
