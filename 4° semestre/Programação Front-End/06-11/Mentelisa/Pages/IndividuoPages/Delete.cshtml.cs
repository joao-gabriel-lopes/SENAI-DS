using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Mentelisa.Models;

namespace Mentelisa.Pages.IndividuoPages;

public class DeleteModel : PageModel
{
    private readonly MentelisaContext _context;

    public DeleteModel(MentelisaContext context)
    {
        _context = context;
    }

    [BindProperty]
    public Individuo Individuo { get; set; } = default!;

    public async Task<IActionResult> OnGetAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var individuo = await _context.Individuo.FirstOrDefaultAsync(m => m.Id == id);
        if (individuo is null)
        {
            return NotFound();
        }
        else
        {
            Individuo = individuo;
        }

        return Page();
    }

    public async Task<IActionResult> OnPostAsync(System.Guid? id)
    {
        if (id is null)
        {
            return NotFound();
        }

        var individuo = await _context.Individuo.FindAsync(id);
        if (individuo != null)
        {
            Individuo = individuo;
            _context.Individuo.Remove(Individuo);
            await _context.SaveChangesAsync();
        }

        return RedirectToPage("./Index");
    }
}
