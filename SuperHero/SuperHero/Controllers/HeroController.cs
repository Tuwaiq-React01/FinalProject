using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using SuperHero.Data;
using SuperHero.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace SuperHero.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HeroController : ControllerBase
    {
        private readonly AppDbContext _db;
        public HeroController(AppDbContext context)
        {
            _db = context;
        }
        [HttpGet]
        public List<InfoModel> Index()
        {
            /*for (int i =198;i<732;i++)
            {
                string api = "https://superheroapi.com/api/API_Key/" + i;
                JObject jsonArray = JObject.Parse(httpReq(api));
                List<HeroModel> tourns = new List<HeroModel>();

                Console.WriteLine(jsonArray);
                this._db.Hero.Add(new HeroModel { Id = (int)jsonArray["id"], Name = (string)jsonArray["name"] });
                this._db.Info.Add(new InfoModel
                {
                    Id = (int)jsonArray["id"],
                    FullName = (string)jsonArray["biography"]["full-name"],
                    Intelligence = (string)jsonArray["powerstats"]["intelligence"],
                    Strength = (string)jsonArray["powerstats"]["strength"],
                    Speed = (string)jsonArray["powerstats"]["speed"],
                    Power = (string)jsonArray["powerstats"]["power"],
                    Combat = (string)jsonArray["powerstats"]["combat"],
                    PlaceOfBirth = (string)jsonArray["biography"]["place-of-birth"],
                    FirstAppearance = (string)jsonArray["biography"]["first-appearance"],
                    Alignment = (string)jsonArray["biography"]["alignment"],
                    Gender = (string)jsonArray["appearance"]["gender"],
                    Race = (string)jsonArray["appearance"]["race"],
                    Height = (string)jsonArray["appearance"]["height"][1]==null? (string)jsonArray["appearance"]["height"][0]:(string)jsonArray["appearance"]["height"][1],
                    Weight = (string)jsonArray["appearance"]["weight"][1]==null? (string)jsonArray["appearance"]["weight"][0]:(string)jsonArray["appearance"]["weight"][1],
                    EyeColor = (string)jsonArray["appearance"]["eye-color"],
                    HairColor = (string)jsonArray["appearance"]["hair-color"],
                    Image = (string)jsonArray["image"]["url"],
                    HeroId = (int)jsonArray["id"]

                });
            this._db.SaveChanges();
            }*/
            
            
            return _db.Info.Where(s => s.Id < 44).ToList();
        }
        public List<InfoModel> All()
        {
            return _db.Info.ToList();
        }
        /*public string httpReq(string api)
        {
            using (var client = new HttpClient())
            {
                var uri = new Uri(api);

                var resonse = client.GetAsync(uri);
                resonse.Wait();
                string res = resonse.Result.Content.ReadAsStringAsync().Result;

                return res;
            }
        }*/

        [HttpPost]
        public async Task<ActionResult<InfoModel>> Create([Bind("Id", "FullName", "Intelligence", "Strength", "Speed", "Power", "Combat", "PlaceOfBirth", "FirstAppearance", "Alignment", "Gender", "Race", "Height", "Weight", "EyeColor", "HairColor", "Image", "HeroId")] InfoModel hero)
        {
            if (ModelState.IsValid)
            {
                await _db.Info.AddAsync(hero);
                await _db.SaveChangesAsync();
                /*_db.Info.Add(hero);
                _db.SaveChanges();*/
                return RedirectToAction("Index");
            }
            return Ok(hero);

        }

        [HttpPost("{id:int}")]
        public IActionResult CreateName([Bind("Id", "Name")] HeroModel hero)
        {
            if (ModelState.IsValid)
            {
                _db.Hero.Add(hero);
                _db.SaveChanges();
                return RedirectToAction("Index");
            }
            return Ok(hero);

        }
        [HttpGet("{id:int}")]
        public int Last()
        {
            var max = _db.Info.OrderByDescending(p => p.Id).FirstOrDefault().Id;
            return max;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<InfoModel>> Delete(int id)
        {
            InfoModel hero = await _db.Info.FirstOrDefaultAsync(hero => hero.Id == id);

            if (hero == null)
                return NotFound();

            _db.Info.Remove(hero);
            await _db.SaveChangesAsync();
            return Ok(hero);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<InfoModel>> Update(int id,[FromBody] InfoModel hero)
        {
            Console.WriteLine( "uuuuuuuuuuuuuuuuuuuuuuu" );
            Console.WriteLine( hero);
            Console.WriteLine( "ffffffffffffffffffffffffffffffffffffff" );
            InfoModel newHero = await _db.Info.FirstOrDefaultAsync(s => s.Id == id);

            if (newHero == null)
                return NotFound();
            Console.WriteLine("ffffffffffffffffffffffffffffffffffffff");

            newHero.FullName = hero.FullName;
            /*_db.Info.Update(newHero);*/
            await _db.SaveChangesAsync();
            Console.WriteLine("ffffffffffffffffffffffffffffffffffffff");

            return Ok(newHero);
        }
        /*public IActionResult Index()
        {
            return View();
        }*/
    }
}
