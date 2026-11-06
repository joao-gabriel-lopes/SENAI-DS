using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ProjetoRazor.Models;

namespace ProjetoRazor.Pages.SuplementoPages;

public class DeleteModel : PageModel
{
    private readonly ProjetoRazorContext _context;

    public DeleteModel(ProjetoRazorContext context)
    {
        _context = context;
    }

    [BindProperty]
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

    public async Task<IActionResult> OnPostAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var suplemento = await _context.Suplemento.FindAsync(id);
        if (suplemento != null)
        {
            Suplemento = suplemento;
            _context.Suplemento.Remove(Suplemento);
            await _context.SaveChangesAsync();
        }

        return RedirectToPage("./Index");
    }
}
