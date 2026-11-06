using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Mentelisa.Models;

namespace Mentelisa.Pages.IndividuoPages;

public class DetailsModel : PageModel
{
    private readonly MentelisaContext _context;
    public DetailsModel(MentelisaContext context)
    {
        _context = context;
    }

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
}
