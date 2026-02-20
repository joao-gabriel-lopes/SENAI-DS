using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Api.Passaporte.Passaporte;

namespace Api.Passaporte.Data
{
    public class ApiPassaporteContext : DbContext
    {
        public ApiPassaporteContext (DbContextOptions<ApiPassaporteContext> options)
            : base(options)
        {
        }

        public DbSet<PassaporteModel> Passaportes { get; set; } = default!;
    }
}
