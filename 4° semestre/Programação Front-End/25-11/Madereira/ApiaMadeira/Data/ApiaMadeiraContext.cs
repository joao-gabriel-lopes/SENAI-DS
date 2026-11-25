using Microsoft.EntityFrameworkCore;

public class ApiaMadeiraContext(DbContextOptions<ApiaMadeiraContext> options) : DbContext(options)
{
    public DbSet<ApiaMadeira.TipoMadeira> TipoMadeira { get; set; } = default!;
}
