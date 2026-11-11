using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BarbeariaRazor.Models;

namespace BarbeariaRazor.Pages.AgendamentoPages;

public class DeleteModel : PageModel
{
    private readonly BarbeariaRazorContext _context;

    public DeleteModel(BarbeariaRazorContext context)
    {
        _context = context;
    }

    [BindProperty]
    public Agendamento Agendamento { get; set; } = default!;

    public async Task<IActionResult> OnGetAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var agendamento = await _context.Agendamento.FirstOrDefaultAsync(m => m.Id == id);
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

    public async Task<IActionResult> OnPostAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var agendamento = await _context.Agendamento.FindAsync(id);
        if (agendamento != null)
        {
            Agendamento = agendamento;
            _context.Agendamento.Remove(Agendamento);
            await _context.SaveChangesAsync();
        }

        return RedirectToPage("./Index");
    }
}
