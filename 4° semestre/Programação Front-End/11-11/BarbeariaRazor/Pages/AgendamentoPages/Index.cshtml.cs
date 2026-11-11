using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BarbeariaRazor.Models;

namespace BarbeariaRazor.Pages.AgendamentoPages;

public class IndexModel : PageModel
{
    private readonly BarbeariaRazorContext _context;

    public IndexModel(BarbeariaRazorContext context)
    {
        _context = context;
    }

    public IList<Agendamento> Agendamento { get; set; } = default!;

    public async Task OnGetAsync()
    {
        Agendamento = await _context.Agendamento
        .Include(a => a.Cliente)
        .ToListAsync();
    }
}
