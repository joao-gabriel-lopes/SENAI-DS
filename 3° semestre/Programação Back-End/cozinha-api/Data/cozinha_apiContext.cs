using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using cozinha_api.Models;

namespace cozinha_api.Data
{
    public class cozinha_apiContext : DbContext
    {
        public cozinha_apiContext (DbContextOptions<cozinha_apiContext> options)
            : base(options)
        {
        }

        public DbSet<UtensilioModel> Utensilios { get; set; } = default!;
    }
}
