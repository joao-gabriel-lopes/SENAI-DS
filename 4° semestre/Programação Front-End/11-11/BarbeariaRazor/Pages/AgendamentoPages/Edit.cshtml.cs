using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BarbeariaRazor.Models;

namespace BarbeariaRazor.Pages.AgendamentoPages;

public class EditModel : PageModel
{
    private readonly BarbeariaRazorContext _context;

    public EditModel(BarbeariaRazorContext context)
    {
        _context = context;
    }

    [BindProperty]
    public Agendamento Agendamento { get; set; } = default!;
    public List<Cliente> Clientes { get; set; } = [];

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
        Agendamento = agendamento;
        return Page();
    }

    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        _context.Attach(Agendamento).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!AgendamentoExists(Agendamento.Id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return RedirectToPage("./Index");
    }

    private bool AgendamentoExists(System.Guid id)
    {
        return _context.Agendamento.Any(e => e.Id == id);
    }
}
