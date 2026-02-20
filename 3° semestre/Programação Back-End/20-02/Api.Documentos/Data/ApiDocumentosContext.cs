using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Api.Documentos.Documentos;

namespace Api.Documentos.Data
{
    public class ApiDocumentosContext : DbContext
    {
        public ApiDocumentosContext (DbContextOptions<ApiDocumentosContext> options)
            : base(options)
        {
        }

        public DbSet<Api.Documentos.Documentos.PassaporteModel> Passaportes { get; set; } = default!;
        public DbSet<Api.Documentos.Documentos.RgModel> Rgs { get; set; } = default!;
    }
}
