using Ejar.Data;
using Ejar.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ejar.Controllers
{
	
	[Route("api/[controller]")]
	[ApiController]
	public class HomeController : ControllerBase
	{
		private readonly ApplicationDbContext _db;
		public HomeController(ApplicationDbContext context)
		{
			_db = context;
		}
		// GET: api/<HomeController>
		[HttpGet]
		public async Task<ActionResult<List<CarModel>>> Get()
		{
			return Ok(await _db.Car.Include(c => c.Images).Include(c => c.Trips).ToListAsync());
		}

		// GET api/<HomeController>/
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "value";
		}

		// POST api/<HomeController>
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/<HomeController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<HomeController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
