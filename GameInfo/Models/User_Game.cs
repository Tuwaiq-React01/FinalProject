using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameInfo.Models
{
    public class User_Game
    {
        public int Id { get; set; }

        public Game Game { get; set; }
        public int GameId { get; set; }


        public User User{ get; set; }
        public int UserId{ get; set; }


    }
}
