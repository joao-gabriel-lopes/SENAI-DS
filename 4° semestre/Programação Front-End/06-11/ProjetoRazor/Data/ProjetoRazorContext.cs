using Microsoft.EntityFrameworkCore;

public class ProjetoRazorContext(DbContextOptions<ProjetoRazorContext> options) : DbContext(options)
{
    public DbSet<ProjetoRazor.Models.Suplemento> Suplemento { get; set; } = default!;
}
