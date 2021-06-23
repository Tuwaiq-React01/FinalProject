using GameInfo.Data;
using GameInfo.Helpers;
using GameInfo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameInfo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtService _jwtService;

        public GamesController(AppDbContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GetGames()
        {
            return await _context.Games.ToListAsync();
        }


        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Game>>> GetGames()
        //{
        //    try
        //    {
        //        var jwt = Request.Cookies["jwt"];

        //        var token = _jwtService.Verify(jwt);

        //        int userId = int.Parse(token.Issuer);

        //        var user = await _context.Users.FindAsync(userId);

        //        var games = await _context.User_Games.Where(g => g.UserId == user.Id).Include(g => g.Game).ToListAsync();

        //        if (games.Count < 1)
        //        {
        //            return NotFound();
        //        }

        //        return Ok(games);
        //    }
        //    catch (Exception e)
        //    {
        //        return Unauthorized();
        //    }
        //}

        // /api/games/3
        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> GetGames(int id)
        {
            var game = await _context.Games.FindAsync(id);

            if (game == null)
            {
                return NotFound();
            }

            return game;
        }

        // POST: api/games
        [HttpPost]
        public async Task<ActionResult<IEnumerable<Game>>> PostGame(Game game)
        {
            _context.Games.Add(game);
            await _context.SaveChangesAsync();
            return await _context.Games.ToListAsync();
        }


        //// POST: api/games
        //[HttpPost]
        //public async Task<ActionResult<IEnumerable<Game>>> PostGame(Game game)
        //{


        //    try
        //    {
        //        var jwt = Request.Cookies["jwt"];

        //        var token = _jwtService.Verify(jwt);

        //        int userId = int.Parse(token.Issuer);

        //        var user = await _context.Users.FindAsync(userId);
        //        User_Game toDB = new User_Game(){ Game = game, User = user };
        //        _context.User_Games.Add(toDB);
        //        await _context.SaveChangesAsync();

        //        return Ok("added");
        //    }
        //    catch (Exception e)
        //    {
        //        return Unauthorized();
        //    }
        //}



        //e
        [HttpPut("{id}")]
        public async Task<ActionResult<Game>> EditGame(int? id, Game game)
        {
            var targetGame = await _context.Games.FindAsync(id);
            if (id == null || targetGame == null)
            {
                return NotFound();
            }

            targetGame.GameName = game.GameName;
            targetGame.Image = game.Image;
            targetGame.Description = game.Description;
            targetGame.Rating = game.Rating;
            targetGame.Genre = game.Genre;

            _context.Games.Update(targetGame);
            _context.SaveChanges();

            return targetGame;
        }



        [HttpDelete("{id}")]
        public async Task<ActionResult<IEnumerable<Game>>> DeleteGame(int id)
        {
            var game = _context.Games.Find(id);
            _context.Games.Remove(game);
            await _context.SaveChangesAsync();

            return await _context.Games.ToListAsync();
        }

        //UNCOMPLETED
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<IEnumerable<Game>>> DeleteGame(int id)
        //{
        //    try
        //    {
        //        var jwt = Request.Cookies["jwt"];
        //        var token = _jwtService.Verify(jwt);
        //        int userId = int.Parse(token.Issuer);
        //        var user = await _context.Users.FindAsync(userId);

        //        var game = _context.Games.Find(id);

        //        var games = _context.User_Games.Where(g => g.UserId == user.Id).Include(g => g.Game).ToListAsync();
        //        var target = _context.User_Games.FirstOrDefault(g => g.UserId == userId && g.GameId == id);
        //        _context.User_Games.Remove(target);
        //        await _context.SaveChangesAsync();

        //        return Ok(games);
        //    }
        //    catch (Exception e)
        //    {
        //        return Unauthorized();
        //    }
        //}



    }
}
