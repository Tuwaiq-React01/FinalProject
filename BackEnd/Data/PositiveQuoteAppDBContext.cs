using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PositiveQuote.Model;

namespace PositiveQuote.Data
{
    public class PositiveQuoteAppDBContext : DbContext
    {
        public PositiveQuoteAppDBContext(DbContextOptions<PositiveQuoteAppDBContext> options)
               : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

           base.OnModelCreating(modelBuilder);

        }
        public DbSet<Quote> Quotes { get; set; }

    }
}
