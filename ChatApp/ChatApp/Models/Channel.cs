using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Models
{
    public class Channel
    {
        // Summary:
        //     Gets or sets the primary key for this user.
        // public virtual TKey Id { get; set; }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Descreption { get; set; }
        public DateTime CreatedAt { get; set; }

        //[ForeignKey("CommunityId")]
        public string CommunityId { get; set; }
        public Community Community { get; set; }
    }
}
