using Microsoft.EntityFrameworkCore;

public class MentelisaContext(DbContextOptions<MentelisaContext> options) : DbContext(options)
{
    public DbSet<Mentelisa.Models.Individuo> Individuo { get; set; } = default!;
}
