using Microsoft.EntityFrameworkCore;

public class ApiBancoContext(DbContextOptions<ApiBancoContext> options) : DbContext(options)
{
    public DbSet<ApiBanco.Usuario> Usuario { get; set; } = default!;
}
