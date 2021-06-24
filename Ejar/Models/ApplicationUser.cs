using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Ejar.Models
{
	public class ApplicationUser : IdentityUser<int>
	{
		public AccountModel Account { get; set; }
		public Location Location { get; set; }
	}
}
