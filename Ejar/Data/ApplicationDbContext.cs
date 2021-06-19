using Ejar.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ejar.Data
{
    public class ApplicationDbContext : KeyApiAuthorizationDbContext<ApplicationUser, ApplicationRole, int>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>(entity => { entity.ToTable(name: "User"); });
            modelBuilder.Entity<ApplicationRole>(entity => { entity.ToTable(name: "Role"); });
        }

        //db references
        public DbSet<CarModel> Car { get; set; }
        public DbSet<ImageModel> Image { get; set; }
        public DbSet<AccountModel> Account { get; set; }
        public DbSet<ApplicationUser> User { get; set; }
        public DbSet<LicenseModel> License { get; set; }
        public DbSet<Location> Location { get; set; }
        public DbSet<TripModel> Trip { get; set; }

    }
}