using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GameInfo.Models
{
    public class Game
    {
        [Key]
        public int Id { get; set; }

        [StringLength(50, ErrorMessage = "Game name can't be more than 50 characters.")]
        public string GameName { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int Rating { get; set; }
        public string Genre { get; set; }


    }
}
