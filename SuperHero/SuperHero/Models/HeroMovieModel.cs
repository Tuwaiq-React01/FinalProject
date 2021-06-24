using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperHero.Models
{
    public class HeroMovieModel
    {
        public int HeroId { get; set; }
        public HeroModel Hero { get; set; }
        public int MovieId { get; set; }
        public MovieModel Movie { get; set; }
    }
}
