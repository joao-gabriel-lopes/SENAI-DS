using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AnimalDomain;

namespace zoologico.Data
{
    public class zoologicoContext : DbContext
    {
        public zoologicoContext (DbContextOptions<zoologicoContext> options)
            : base(options)
        {
        }

        public DbSet<Genero> Generos { get; set; } = default!;
        public DbSet<Especie> Especies { get; set; } = default!;
    }
}
