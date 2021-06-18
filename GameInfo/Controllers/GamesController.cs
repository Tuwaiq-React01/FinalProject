using GameInfo.Data;
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

        public GamesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GetGames()
        {
            return await _context.Games.ToListAsync();
        }


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





    }
}
