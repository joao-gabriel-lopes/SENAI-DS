using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BarbeariaRazor.Models;

namespace BarbeariaRazor.Pages.ClientePages;

public class DeleteModel : PageModel
{
    private readonly BarbeariaRazorContext _context;

    public DeleteModel(BarbeariaRazorContext context)
    {
        _context = context;
    }

    [BindProperty]
    public Cliente Cliente { get; set; } = default!;

    public async Task<IActionResult> OnGetAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var cliente = await _context.Cliente.FirstOrDefaultAsync(m => m.Id == id);
        if (cliente is null)
        {
            return NotFound();
        }
        else
        {
            Cliente = cliente;
        }

        return Page();
    }

    public async Task<IActionResult> OnPostAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var cliente = await _context.Cliente.FindAsync(id);
        if (cliente != null)
        {
            Cliente = cliente;
            _context.Cliente.Remove(Cliente);
            await _context.SaveChangesAsync();
        }

        return RedirectToPage("./Index");
    }
}
