using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class CommunityUser
    {
        public int Id { get; set; }
        public string CommunityId { get; set; }
        public Community Community { get; set; }

        public string UserId { get; set; }
        public UserProfile User { get; set; }
        public bool IsOwner { get; set; }

        // creater
        //public string CreatorId { get; set; }
        //public UserProfile Creator { get; set; }
        // Other
        // public string OtherId { get; set; }
        //public UserProfile Other { get; set; }
    }
}
