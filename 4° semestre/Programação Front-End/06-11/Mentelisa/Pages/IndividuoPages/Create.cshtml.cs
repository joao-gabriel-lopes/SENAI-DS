using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Mentelisa.Models;

namespace Mentelisa.Pages.IndividuoPages;

public class CreateModel : PageModel
{
    private readonly MentelisaContext _context;

    public CreateModel(MentelisaContext context)
    {
        _context = context;
    }

    public IActionResult OnGet()
    {
        return Page();
    }

    [BindProperty]
    public Individuo Individuo { get; set; } = default!;

    // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD.
    public async Task<IActionResult> OnPostAsync()
    {
        if (!ModelState.IsValid)
        {
            return Page();
        }

        _context.Individuo.Add(Individuo);
        await _context.SaveChangesAsync();

        return RedirectToPage("./Index");
    }
}
