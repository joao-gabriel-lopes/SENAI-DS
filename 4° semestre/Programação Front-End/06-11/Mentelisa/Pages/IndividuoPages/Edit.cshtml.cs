using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Mentelisa.Models;

namespace Mentelisa.Pages.IndividuoPages;

public class EditModel : PageModel
{
    private readonly MentelisaContext _context;

    public EditModel(MentelisaContext context)
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
        Individuo = individuo;
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

        _context.Attach(Individuo).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!IndividuoExists(Individuo.Id))
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

    private bool IndividuoExists(System.Guid id)
    {
        return _context.Individuo.Any(e => e.Id == id);
    }
}
