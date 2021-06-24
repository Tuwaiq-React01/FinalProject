using Microsoft.EntityFrameworkCore;
using SuperHero.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperHero.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<HeroMovieModel>()
                .HasKey(cc => new { cc.HeroId, cc.MovieId });
            modelBuilder.Entity<HeroMovieModel>()
                .HasOne(cc => cc.Hero)
                .WithMany(b => b.HeroMovie)
                .HasForeignKey(cc => cc.HeroId);
            modelBuilder.Entity<HeroMovieModel>()
                .HasOne(cc => cc.Movie)
                .WithMany(c => c.HeroMovie)
                .HasForeignKey(cc => cc.MovieId);


            modelBuilder.Entity<HeroModel>().HasData(new HeroModel { Id = 1, Name = "FAS"});
        }

        public DbSet<HeroModel> Hero { set; get; }
        public DbSet<InfoModel> Info { set; get; }
        public DbSet<MovieModel> Movie { set; get; }
        public DbSet<HeroMovieModel> HeroMovie { set; get; }
    }
}
