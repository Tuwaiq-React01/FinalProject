using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Ejar.Models
{
	public class TripModel
	{
		public int Id { get; set; }
		public string DateReservedFrom { get; set; }
		public string DateReservedUntil { get; set; }

		public string TimeReservedFrom { get; set; }
		public string TimeReservedUntil { get; set; }
		public decimal TripPrice { get; set; }
		public string CarName { get; set; }
		public string CarImage { get; set; }
		//public int Cid { get; set; }
		
		
		/*[ForeignKey("ApplicationUser")]
		public int UserId { get; set; }
		[JsonIgnore]
		public ApplicationUser User { get; set; }*/
		[JsonIgnore]
		[ForeignKey("AccountModel")]
		public int AccountId { get; set; }
		[JsonIgnore]
		public AccountModel Account { get; set; }
		
		
		[ForeignKey("CarModel")]
		public int CarId { get; set; }
		[JsonIgnore]
		public CarModel Car { get; set; }
		
		
		

	}
}
