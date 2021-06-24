using ChatApp.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApp.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<Community> Communities { get; set; }
        public DbSet<ApplicationUser> Users { get; set; }
        public DbSet<Channel> Channels { get; set; }
        public DbSet<CommunityUser> CommunityUser { get; set; } // ?

    }
}
