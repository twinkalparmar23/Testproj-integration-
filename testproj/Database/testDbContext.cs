using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using testproj.Models;

namespace testproj.Database
{
    public class testDbContext : DbContext
    {
        public testDbContext(DbContextOptions  options): base(options)
        {
              
        }

        public DbSet<emp> Employee { get; set; }

    }
}
