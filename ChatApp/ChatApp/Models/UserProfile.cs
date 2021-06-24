using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class UserProfile
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Tag { get; set; }
        public DateTime JoiningDate { get; set; }

        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public List<CommunityUser> CommunityUsers { get; set; }


        /*[InverseProperty("Creator")]
        public List<CommunityUser> CommunityOwnerUsers { get; set; }
        //[InverseProperty("OtherUser")]
        public List<CommunityUser> CommunityOtherUsers { get; set; }*/


    }
}
