using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BarbeariaRazor.Models;

namespace BarbeariaRazor.Pages.AgendamentoPages;

public class CreateModel : PageModel
{
    private readonly BarbeariaRazorContext _context;

    public CreateModel(BarbeariaRazorContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> OnGet()
    {
        Clientes = await _context.Cliente.ToListAsync();
        return Page();
    }

    [BindProperty]
    public Agendamento Agendamento { get; set; } = default!;
    public List<Cliente> Clientes { get; set; } = [];

    // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        _context.Agendamento.Add(Agendamento);
        await _context.SaveChangesAsync();

        return RedirectToPage("./Index");
    }
}
