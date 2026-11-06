using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ProjetoRazor.Models;

namespace ProjetoRazor.Pages.SuplementoPages;

public class EditModel : PageModel
{
    private readonly ProjetoRazorContext _context;

    public EditModel(ProjetoRazorContext context)
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
        Suplemento = suplemento;
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

        _context.Attach(Suplemento).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!SuplementoExists(Suplemento.Id))
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

    private bool SuplementoExists(System.Guid id)
    {
        return _context.Suplemento.Any(e => e.Id == id);
    }
}
