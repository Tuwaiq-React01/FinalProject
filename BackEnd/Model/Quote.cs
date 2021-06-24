using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace PositiveQuote.Model
{
    public class Quote
    {
        [Key]
        public int Quote_ID { get; set; }
        [Required]
        public string Quote_Content { get; set; }
        public string Speaker_Nmae { get; set; }


    }
}
