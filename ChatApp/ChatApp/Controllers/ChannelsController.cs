using ChatApp.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using ChatApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ChannelsController : Controller
    {
        private readonly ApplicationDbContext _db;

        public ChannelsController(ApplicationDbContext context)
        {
            _db = context;
        }

        [HttpGet("Index")]
        public IActionResult Index([FromQuery]string communityId)
        {
            var channels = _db.Channels.Where(c => c.CommunityId==communityId).ToList();
            if (channels==null){
                return BadRequest();
            }
            return Ok(channels);
        }
        [HttpPost("Create")]
        public IActionResult Create([FromQuery]string channelId, [FromQuery]string name, [FromQuery] string descreption)
        {
            string channel_id = Guid.NewGuid().ToString("N"); // Represents: a globally unique identifier (GUID).
            _db.Channels.Add(new Channel() { Id = channel_id, CommunityId = channelId, Name = name , Descreption  = descreption, CreatedAt= DateTime.Now });
            _db.SaveChanges();
            return Ok(new { Message = "Success request for cerating the Channel # " + channel_id });
        }
        //communityId

        [HttpPut("Edit")]
        public async Task<IActionResult> Edit([FromQuery] string channelId, [FromQuery] string Name, [FromQuery] string Descreption)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var channelToUpdate = await _db.Channels.Include(c => c.Community).ThenInclude(cu=> cu.CommunityUsers.Where(u => u.UserId == userId && u.IsOwner == true)).FirstOrDefaultAsync(s => s.Id == channelId);
            if (channelToUpdate == null) { return BadRequest(); }
            if (await TryUpdateModelAsync<Channel>(
                channelToUpdate,
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
            return Ok(new { Message = "the Channel has been updated successfully" });
        }
        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete([FromQuery] string channelId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            Console.WriteLine(userId);
            var ChannalToDelete = await _db.Channels.Include(c => c.Community).ThenInclude(cu => cu.CommunityUsers.Where(u => u.UserId == userId && u.IsOwner == true)).FirstOrDefaultAsync(s => s.Id == channelId);
            if (ChannalToDelete == null) { return BadRequest(new { Error = "Unable to deleted the community at this moment" }); }

            _db.Channels.Remove(ChannalToDelete);
            _db.SaveChanges();
            return Ok(new { Message = "the Channel has been deleted successfully" });
        }

        [HttpGet("Room")]
        public async Task<IActionResult> Room([FromQuery]string ChannelId)
        {   
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var room = _db.Channels.ToList().Find(c => c.Id == ChannelId);

            if (room == null) { return BadRequest(new {Message="You dont have the primisstion to access this channel"}); }
            var userProfile = _db.UserProfiles.ToList().Find(profile => profile.Id == userId);
            return Ok(new{Profile = userProfile,roomInfo = room});
        }
    }
}
