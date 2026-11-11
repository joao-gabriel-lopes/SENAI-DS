using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BarbeariaRazor.Models;

namespace BarbeariaRazor.Pages.AgendamentoPages;

public class DetailsModel : PageModel
{
    private readonly BarbeariaRazorContext _context;
    public DetailsModel(BarbeariaRazorContext context)
    {
        _context = context;
    }

    public Agendamento Agendamento { get; set; } = default!;

    public async Task<IActionResult> OnGetAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var agendamento = await _context.Agendamento.Include(a => a.Cliente).FirstOrDefaultAsync(m => m.Id == id);
        if (agendamento is null)
        {
            return NotFound();
        }
        else
        {
            Agendamento = agendamento;
        }

        return Page();
    }
}
