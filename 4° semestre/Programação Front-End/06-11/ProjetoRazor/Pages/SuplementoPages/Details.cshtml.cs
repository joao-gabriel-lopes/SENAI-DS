using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ProjetoRazor.Models;

namespace ProjetoRazor.Pages.SuplementoPages;

public class DetailsModel : PageModel
{
    private readonly ProjetoRazorContext _context;
    public DetailsModel(ProjetoRazorContext context)
    {
        _context = context;
    }

    public Suplemento Suplemento { get; set; } = default!;

    public async Task<IActionResult> OnGetAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var suplemento = await _context.Suplemento.FirstOrDefaultAsync(m => m.Id == id);
        if (suplemento is null)
        {
            return NotFound();
        }
        else
        {
            Suplemento = suplemento;
        }

        return Page();
    }
}
