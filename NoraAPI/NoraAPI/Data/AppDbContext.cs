using GreenLifeStore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoraAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<ProductModel> Products { get; set; }

        /*
        //insert Products
        modelBuilder.Entity<ProductModel>().HasData(new Product{ ProductId = 1, Name = "Apple", Price = 1.5f, Image = "https://www.othaimmarkets.com/media/catalog/product/cache/4/small_image/170x165/9df78eab33525d08d6e5fb8d27136e95/1/3/132.jpg" });
        modelBuilder.Entity<ProductModel>().HasData(new Product{ ProductId = 2, Name = "Orange", Price = 1.5f, Image = "https://www.othaimmarkets.com/media/catalog/product/cache/4/small_image/340x330/9df78eab33525d08d6e5fb8d27136e95/o/r/orange-2.jpg" });

        modelBuilder.Entity<ProductModel>().HasData(new Product { ProductId = 3, Name = "Banana", Price = 3.5f, Image = "https://www.othaimmarkets.com/media/catalog/product/cache/4/small_image/340x330/9df78eab33525d08d6e5fb8d27136e95/5/0/500_0.jpg" });
        */

    }
}


