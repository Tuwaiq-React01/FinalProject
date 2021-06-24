using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class Community
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Descreption { get; set; }
        public DateTime CreatedAt { get; set; }

        //[InverseProperty("Community")]
        public List<CommunityUser> CommunityUsers { get; set; }

        // channels
        //[InverseProperty("Channels")]
        public List<Channel> Channels { get; set; }
    }
}
