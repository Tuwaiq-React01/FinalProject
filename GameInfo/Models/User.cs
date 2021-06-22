using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GameInfo.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        [Required]
        public string Email { get; set; }
        public string Password { get; set; }


        public List<User_Game> User_Games { get; set; }

    }
}
