using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjetoLog.Models;

    public class ProjetoLogContext : DbContext
    {
        public ProjetoLogContext (DbContextOptions<ProjetoLogContext> options)
            : base(options)
        {
        }

        public DbSet<ProjetoLog.Models.Catalogo> Catalogo { get; set; } = default!;
    }
