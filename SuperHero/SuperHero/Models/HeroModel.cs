using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperHero.Models
{
    public class HeroModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public InfoModel Info { get; set; }
        public List<HeroMovieModel> HeroMovie { get; set; }
    }
}
