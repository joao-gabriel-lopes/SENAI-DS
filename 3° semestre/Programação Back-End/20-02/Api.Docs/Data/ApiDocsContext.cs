using Microsoft.EntityFrameworkCore;
using Api.Docs.Rg;

namespace Api.Docs.Data
{
    public class ApiDocsContext : DbContext
    {
        public ApiDocsContext (DbContextOptions<ApiDocsContext> options)
            : base(options)
        {
        }

        public DbSet<RgModel> Rgs { get; set; } = default!;
    }
}
