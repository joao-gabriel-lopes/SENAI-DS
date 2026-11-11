using Microsoft.EntityFrameworkCore;

public class BarbeariaRazorContext(DbContextOptions<BarbeariaRazorContext> options) : DbContext(options)
{
    public DbSet<BarbeariaRazor.Models.Cliente> Cliente { get; set; } = default!;
    public DbSet<BarbeariaRazor.Models.Agendamento> Agendamento { get; set; } = default!;
}
