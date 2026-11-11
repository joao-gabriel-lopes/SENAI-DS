using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using BarbeariaRazor.Models;
using Microsoft.EntityFrameworkCore.Query;

namespace BarbeariaRazor.Pages.ClientePages;

public class DetailsModel : PageModel
{
    private readonly BarbeariaRazorContext _context;
    public DetailsModel(BarbeariaRazorContext context)
    {
        _context = context;
    }

    public Cliente Cliente { get; set; } = default!;

    public async Task<IActionResult> OnGetAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var cliente = await _context.Cliente.Include(c => c.Agendamentos).FirstOrDefaultAsync(m => m.Id == id);
        
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
}
