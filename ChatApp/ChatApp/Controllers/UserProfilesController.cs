using ChatApp.Data;
using ChatApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
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
    //[Route("/api/UserProfile")]
    public class UserProfilesController : Controller
    {
        private readonly ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;


        public UserProfilesController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _db = context;
            _userManager = userManager;
        }

        [HttpGet("Index")]
        public async Task<IActionResult> Index()
        {
            Console.WriteLine("sdjdshvjhjhsvfv------------------------------dfvfdvdfvdfv");
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            Console.WriteLine(userId);
            var user = await _userManager.FindByIdAsync(userId);
            var userProfile = _db.UserProfiles.ToList().Find(u => u.Id == ClaimTypes.NameIdentifier);
            if (user == null) { return BadRequest(); }
            if (user != null && userProfile == null)
            {
                _db.UserProfiles.Add(new UserProfile() { Id = user.Id, Image = "https://www.pngitem.com/pimgs/m/146-1468843_profile-icon-orange-png-transparent-png.png", UserId = user.Id });
                _db.SaveChanges();
            }
            userProfile = _db.UserProfiles.ToList().Find(u => u.Id == ClaimTypes.NameIdentifier);

            Console.WriteLine(userId);
            Console.WriteLine(user);

            return RedirectToAction("Index", "Communities");
           // var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
           // Console.WriteLine("---------------------------------------------");
           // Console.WriteLine(userId);
           // return View();
        }

        public async Task<IActionResult> Update([Bind("Id", "Name", "Image")] UserProfile profile)
        {
            var user = await _userManager.FindByIdAsync(ClaimTypes.NameIdentifier);
            /* var userProfile = _db.UserProfiles.ToList().Find(u => u.Id == ClaimTypes.NameIdentifier);
             if(user != null && userProfile==null)
             {
                 _db.UserProfiles.Add(new UserProfile() { Id = user.Id, Image = "https://www.pngitem.com/pimgs/m/146-1468843_profile-icon-orange-png-transparent-png.png", UserId = user.Id });
                 _db.SaveChanges();
             }
             userProfile = _db.UserProfiles.ToList().Find(u => u.Id == ClaimTypes.NameIdentifier);
 */
           // return Ok(user);
            var userToUpdate = await _db.UserProfiles.FirstOrDefaultAsync(s => s.Id == profile.Id);
            if (await TryUpdateModelAsync<UserProfile>(
                userToUpdate,
                "",
                s => s.Name , s => s.Image))
            {
                try
                {
                    await _db.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateException /* ex */)
                {
                    //Log the error (uncomment ex variable name and write a log.)
                    ModelState.AddModelError("", "Unable to save changes. " +
                        "Try again, and if the problem persists, " +
                        "see your system administrator. You can Find me at GitHub: @1Riyad");
                }
            }
            /*            _db.UserProfiles.Update(profile);
                        _db.SaveChanges();*/
            return RedirectToAction("Index");
        }
    }
}
