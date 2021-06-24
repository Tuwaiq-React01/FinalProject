using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Ejar.Models
{
	public class AccountModel
	{
		public int Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public int PhoneNumber { get; set; }
		[JsonIgnore]
		public string PersonalPhoto { get; set; }
		public string Address { get; set; }
		[JsonIgnore]
		public decimal balance { get; set; }

		[JsonIgnore]
		public string AccountComplete { get; set; }
	
		[JsonIgnore]
		public LicenseModel License { get; set; }

		
		[ForeignKey("ApplicationUser")]
		public int UserId { get; set; }
		[JsonIgnore]
		public ApplicationUser User { get; set; }
		public ICollection<CarModel> Cars { get; set; }
	
		public ICollection<TripModel> Trips { get; set; }
	}
}
