using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperHero.Models
{
    public class InfoModel
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Intelligence { get; set; }
        public string Strength { get; set; }
        public string Speed { get; set; }
        public string Power { get; set; }
        public string Combat { get; set; }
        public string PlaceOfBirth { get; set; }
        public string FirstAppearance { get; set; }
        public string Alignment { get; set; }
        public string Gender { get; set; }
        public string Race { get; set; }
        public string Height { get; set; }
        public string Weight { get; set; }
        public string EyeColor { get; set; }
        public string HairColor { get; set; }
        public string Image { get; set; }

        public HeroModel Hero { get; set; }
        public int HeroId { get; set; }
    }
}
